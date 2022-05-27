export type Person = {
  name: string;
  company: string;
  imageId?: string;
  image?: string;
  roles: string[];
  twitterLink: string;
  isImageEdited?: boolean;
  imageFallback?: string;
}

import { ref } from "vue";
export const peopleData = ref<Person[]>();
export const isGoogleDataCorrupted = ref(false)
import csvtojson from 'csvtojson'
import { Roles, peopleFallback } from "@/components/people"

const axios = require("axios").default;
const imagesDataJson = ref()
const peopleDataJson = ref<PersonRaw[]>([])

type PersonRaw = {
  name: string;
  ['last name']: string;
  company: string;
  twitter?: string;
  role: string;
  ['upraveno']: string;
}

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSC5rnIGpiiT2tB7tp_0vd8hQba3-FD6K6vnuBTs5q2KIUuewXrEQBfrhit1jEH4Gl4qSZGbbC4ucrp/pub?output=csv";


const imagesNamesAndIds = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQT7sEWKHHYfflEwzDn_-W5m4tgA0zGS0h9WNhmLAGMp9-99o_iufjOLozYyb9BvcBIMOm8d70oMqD1/pub?output=csv"

export const getPersonImage = ({person, isFallback, peopleData, isGoogleDataCorrupted}: {person: Person, isFallback?: boolean, peopleData?: Person[], isGoogleDataCorrupted: boolean}) => {
  
  if (!peopleData || isGoogleDataCorrupted) {
    try {
      return require(`../assets/people/${person.image}`)
    } catch (err) {
      return require('../assets/people/default.jpg')
    }
  }

  if (isFallback) {
    if (person.imageFallback) {
      return require(`../assets/people/${person.imageFallback}`)
    }
    return require('../assets/people/default.jpg')
  }

  try {
    return require(`../assets/people/${person.name}.jpg`)
  } catch (err) {
    try {
      return `https://drive.google.com/uc?export=view&id=${person.imageId}`
    } catch (err) {
      return require('../assets/people/default.jpg')
    }
  }
}

export const findPersonByName = (personToFind: any) => {
  
  if (!peopleData.value) return undefined;
  const foundPerson = peopleData.value.find(
    (person) => person.name === personToFind.public_name
  );
  
  if (foundPerson) return foundPerson;
  return undefined;
};

export const fetchPeopleData = async() => {
  try {
    const imagesDataCsv = await axios.get(imagesNamesAndIds)
    imagesDataJson.value = await csvtojson().fromString(imagesDataCsv.data)
  } catch (e) {
    isGoogleDataCorrupted.value = true
  }  

  const getImageIdByPersonName = (person: PersonRaw) => {
    const nameVariantA = `${person['name']}_${person['last name']}`
    const nameVariantB = `${person['name']} ${person['last name']}`

    const imageId = imagesDataJson.value.find((image: {name: string}) =>
      image.name.toLowerCase().includes(nameVariantA.toLowerCase()) ||
      image.name.toLowerCase().includes(nameVariantB.toLowerCase()));
    if (imageId) {
      return imageId.fileId;
    }
    return null;
  }

  const getImageFallback = (person: PersonRaw) => {
    const personName = `${person['name']} ${person['last name']}`
    const fallbackPerson = peopleFallback.find((person: Person) =>
      person.name.toLowerCase().includes(personName.toLowerCase()))
    if (fallbackPerson) {
      return fallbackPerson.image;
    }
    return null;
  }

  try {
    const peopleDataCsv = await axios.get(url)
    peopleDataJson.value = await csvtojson().fromString(peopleDataCsv.data)
  } catch (e) {
    isGoogleDataCorrupted.value = true
  } 
  const arrayOfMustHaveKeys = ['name', 'last name', 'company', 'role']

  const isDataCorrupted = peopleDataJson.value.some(person => {
    const keys = Object.keys(person)
    return !arrayOfMustHaveKeys.every(key => keys.includes(key))
  })

  if (isDataCorrupted) isGoogleDataCorrupted.value = true

  const filteredEmptyObjects = peopleDataJson.value.filter(person => {
    if (person.name === '' || person['last name'] === '') return false
    return true
  })

  peopleData.value = (filteredEmptyObjects || []).map(person => {
    return {
      name: `${person.name} ${person['last name']}`,
      company: person.company,
      imageId: getImageIdByPersonName(person),
      imageFallback: getImageFallback(person),
      roles: person.role.includes(',') ? person.role.split(",") : person.role.split(" "),
      twitterLink: person.twitter,
      isImageEdited: person['upraveno'] === "y"
    }
  }) as Person[];
}
