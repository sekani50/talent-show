import axios from "./useAxios";

//vote

export const voting = (token, eventId, participantId, payload) => {
  return axios.post(`/events/vote/${eventId}/${participantId}`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getEvents = (page) => {
  return axios.get(`/events/?page=${page}`);
};

export const contactUs = (payload) => {
  return axios.post(`/contact`, payload);
};
//////
export const onboarding = (token, payload) => {
  return axios.put(`/user/onboarding`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

///
export const getUsers = (token) => {
  return axios.get(`/auth/me`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};


// /password/change
export const changePassword = (token, payload) => {
  return axios.put(`/password/change`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

// /password/forgot
export const sendMail = (token, payload) => {
  return axios.post(`/password/forgot`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

////events/upload-in-action-video
export const actionVideo = (token, form) => {
  return axios.post(`/upload-video`, form, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

///events/upcoming-events
export const upcomingEvent = () => {
  return axios.get(`/events/upcoming-events`, {});
};

///events/:eventId
export const singleEvent = (id) => {
  return axios.get(`/events/${id}`, {});
};

///events/:eventId
export const contest = (id, payload, token) => {
  return axios.post(`/events/join/${id}`, payload, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

////user/update-profile
export const updateProfile = (token, payload) => {
  return axios.put(`/user/update-profile`, payload), {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
} 

///events/:eventID/participants?page=1
export const eventParticipants =(token,eventId, page) => {
  return axios.get(`/events/${eventId}/participants?page=${page}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}

////user/participants/:userId
export const singleParticipant = (token, userId) => {
  return axios.get(`/user/participants/${userId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
}