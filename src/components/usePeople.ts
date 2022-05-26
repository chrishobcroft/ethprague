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