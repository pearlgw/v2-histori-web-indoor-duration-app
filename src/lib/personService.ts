import api from './axios';

export type PersonDuration = {
  uid: string;
  total_duration: string;
  status: string;
  name: string;
  created_at: string;
};

export interface PersonDetail {
  uid: string;
  nim: string;
  labeled_image: string;
  name_track_id: string;
  start_time: string;
  end_time: string;
  person_duration_uid: string;
  name: string;
}

export const getPersonDuration = async (): Promise<PersonDuration[]> => {
  const response = await api.get('api/3/person_duration/');
  return response.data.data;
};

export async function getPersonDetail(uid: string, token: string): Promise<PersonDetail[]> {
  const response = await api.get(`api/3/person_duration/detail/${uid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
}

export async function getDecryptedImage(filename: string, token: string): Promise<string> {
  const response = await api.get(`/api/3/image/${filename}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: "blob",
  });

  return URL.createObjectURL(response.data); // return object URL to be used in <img> or <Image>
}


