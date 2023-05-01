import axios from "axios";

const projects = async () =>
  axios
    .get("https://portfoliodb-tabatacsouto.b4a.run/projects")
    .then((response) => response.data);

const contrasts = async () =>
  axios
    .get("https://portfoliodb-tabatacsouto.b4a.run/contrasts")
    .then((response) => response.data);

const hardskills = async () =>
  axios
    .get("https://portfoliodb-tabatacsouto.b4a.run/hardskills")
    .then((response) => response.data);

const softskills = async () =>
  axios
    .get("https://portfoliodb-tabatacsouto.b4a.run/softskills")
    .then((response) => response.data);


export {
  projects,
  contrasts,
  hardskills,
  softskills
}