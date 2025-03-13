'use server'
import { makeAuthenticatedRequest } from "./makeAuthenticatedRequest";

export const fetchCategory = async () => {
    // la fonction makeAuthenticatedRequest va vous permettre de faire vos requête sans vous soucier de l'autorisation, il faut juste lui passer les paramètres de la requête et elle vous renvoie directement la 'data' souhaité
    const test = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category`,
      "GET"
    );
  
    // dans ce cas 'test' représente toutes les missions, vous pouvez ensuite envoyer la 'data' comme vous le souhaitez via le 'return'
    return JSON.parse(JSON.stringify(test));
  };



  export const postCategory = async (body:any) => {
    // la fonction makeAuthenticatedRequest va vous permettre de faire vos requête sans vous soucier de l'autorisation, il faut juste lui passer les paramètres de la requête et elle vous renvoie directement la 'data' souhaité
    const test = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category`,
      "POST",
       body
    );
  
    // dans ce cas 'test' représente toutes les missions, vous pouvez ensuite envoyer la 'data' comme vous le souhaitez via le 'return'
    return JSON.parse(JSON.stringify(test));
  };



  export const putCategory = async (body:any) => {
    // la fonction makeAuthenticatedRequest va vous permettre de faire vos requête sans vous soucier de l'autorisation, il faut juste lui passer les paramètres de la requête et elle vous renvoie directement la 'data' souhaité
    const test = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category/${body.id}`,
      "PUT",
       body.body
    );
    // dans ce cas 'test' représente toutes les missions, vous pouvez ensuite envoyer la 'data' comme vous le souhaitez via le 'return'
    return JSON.parse(JSON.stringify(test));
  };



  export const deleteCategory = async (id:string) => {
    // la fonction makeAuthenticatedRequest va vous permettre de faire vos requête sans vous soucier de l'autorisation, il faut juste lui passer les paramètres de la requête et elle vous renvoie directement la 'data' souhaité
    const test = await makeAuthenticatedRequest(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/category/${id}`,
      "DELETE",
    );
  
    // dans ce cas 'test' représente toutes les missions, vous pouvez ensuite envoyer la 'data' comme vous le souhaitez via le 'return'
    return JSON.parse(JSON.stringify(test));
  };