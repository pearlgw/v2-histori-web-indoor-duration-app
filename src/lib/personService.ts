import api from './axios';

export type PersonDuration = {
  uid: string;
  total_duration: string;
  status: string;
  name: string;
  created_at: string;
};

export const getPersonDuration = async (): Promise<PersonDuration[]> => {
  const response = await api.get('api/3/person_duration/');
  return response.data.data;
};
