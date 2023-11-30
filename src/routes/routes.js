import Dashboard from "../layouts/admin/Dashboard";
import Profile from "../layouts/admin/Profile";

import Event from "../layouts/admin/Event";
import AllEvent from "../layouts/admin/AllEvent";
import ViewEvent from "../layouts/admin/ViewEvent";

import AllAttendee from "../layouts/admin/AllAttendee";
import EditEvent from "../layouts/admin/EditEvent";
import AddAttendee from "../layouts/admin/AddAttendee";
import EditAttendee from "../layouts/admin/EditAttendee";
import ViewAttendee from "../layouts/admin/ViewAttendee";
import AllAttendeeList from "../layouts/admin/AllAttendeeList";

import SendMailAttendee from "../layouts/admin/SendMailAttendee";
import SendSmsAttendee from "../layouts/admin/SendSmsAttendee";

import Blank from "../layouts/admin/Blank";
import Settings from "../layouts/admin/Settings";
import ActivityLog from "../layouts/admin/ActivityLog";
import AllSponsors from "../layouts/admin/AllSponsors";
import SponsorStatus from "../layouts/admin/SponsorStatus";
import EmailMailing from "../layouts/admin/EmailMailing";
import EmailManager from "../layouts/admin/EmailManager";
import AllContacts from "../layouts/admin/AllContacts";
import ContactStatus from "../layouts/admin/ContactStatus";
import GetHelp from "../layouts/admin/GetHelp";
import Faqs from "../layouts/admin/Faqs";
import ChangePassword from "../layouts/admin/ChangePassword";
import AllFeedbacks from "../layouts/admin/AllFeedbacks";

//Reports
import AllReports from "../layouts/admin/AllReports";
import Reports from "../layouts/admin/Reports";

import AddCompany from "../layouts/admin/AddCompany";
import AddIndustry from "../layouts/admin/AddIndustry";
import AddJobTitle from "../layouts/admin/AddJobTitle";

import AddCountry from "../layouts/admin/AddCountry";

//Sponsors
import AddSponsors from "../layouts/admin/AddSponsors";
import EditSponsors from "../layouts/admin/EditSponsors";
import ViewSponsor from "../layouts/admin/ViewSponsor";
import Page404 from "../errors/Page404";
import Page404Dashboard from "../errors/Page404Dashboard";
import AddState from "../layouts/admin/AddState";
import AddCity from "../layouts/admin/AddCity";
import AddSkills from "../layouts/admin/AddSkills";

const routes = [
  { path: "/admin", exact: true, name: "Admin", component: Dashboard },
  {
    path: "/admin/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  { path: "/admin/profile", exact: true, name: "Profile", component: Profile },
  {
    path: "/admin/change-password",
    exact: true,
    name: "ChangePassword",
    component: ChangePassword,
  },
  { path: "/admin/add-event", exact: true, name: "Event", component: Event },
  {
    path: "/admin/all-events",
    exact: true,
    name: "AllEvent",
    component: AllEvent,
  },
  {
    path: "/admin/view-event/:id",
    exact: true,
    name: "ViewEvent",
    component: ViewEvent,
  },
  {
    path: "/admin/edit-event/:id",
    exact: true,
    name: "EditEvent",
    component: EditEvent,
  },
  {
    path: "/admin/send-notification-attendee/:id",
    exact: true,
    name: "SendSmsAttendee",
    component: SendSmsAttendee,
  },
  {
    path: "/admin/send-mail-attendee/:id",
    exact: true,
    name: "SendMailAttendee",
    component: SendMailAttendee,
  },
  {
    path: "/admin/all-attendee-list",
    exact: true,
    name: "AllAttendeeList",
    component: AllAttendeeList,
  },
  {
    path: "/admin/all-attendee/:id",
    exact: true,
    name: "AllAttendee",
    component: AllAttendee,
  },
  {
    path: "/admin/add-attendee/:id",
    exact: true,
    name: "AddAttendee",
    component: AddAttendee,
  },
  {
    path: "/admin/edit-attendee/:id",
    exact: true,
    name: "EditAttendee",
    component: EditAttendee,
  },
  {
    path: "/admin/view-attendee-details/:id",
    exact: true,
    name: "ViewAttendee",
    component: ViewAttendee,
  },
  //Mapping Data
  {
    path: "/admin/add-country",
    exact: true,
    name: "AddCountry",
    component: AddCountry,
  },
  {
    path: "/admin/add-state",
    exact: true,
    name: "AddState",
    component: AddState,
  },
  {
    path: "/admin/add-city",
    exact: true,
    name: "AddCity",
    component: AddCity,
  },
  {
    path: "/admin/add-skills",
    exact: true,
    name: "AddSkills",
    component: AddSkills,
  },
  {
    path: "/admin/add-industry",
    exact: true,
    name: "AddIndustry",
    component: AddIndustry,
  },
  {
    path: "/admin/add-company",
    exact: true,
    name: "AddCompany",
    component: AddCompany,
  },
  {
    path: "/admin/add-job-title",
    exact: true,
    name: "AddJobTitle",
    component: AddJobTitle,
  },

  {
    path: "/admin/sponsors",
    exact: true,
    name: "AllSponsors",
    component: AllSponsors,
  },
  {
    path: "/admin/add-sponsors/:id",
    exact: true,
    name: "AddSponsors",
    component: AddSponsors,
  },
  {
    path: "/admin/add-sponsor",
    exact: true,
    name: "AddSponsors",
    component: AddSponsors,
  },
  {
    path: "/admin/edit-sponsor/:id",
    exact: true,
    name: "EditSponsors",
    component: EditSponsors,
  },
  {
    path: "/admin/view-sponsor-details/:id",
    exact: true,
    name: "ViewSponsor",
    component: ViewSponsor,
  },
  {
    path: "/admin/sponsor-status",
    exact: true,
    name: "SponsorStatus",
    component: SponsorStatus,
  },
  {
    path: "/admin/email-manager",
    exact: true,
    name: "EmailManager",
    component: EmailManager,
  },
  {
    path: "/admin/mass-mailing",
    exact: true,
    name: "EmailMailing",
    component: EmailMailing,
  },
  {
    path: "/admin/all-contacts",
    exact: true,
    name: "AllContacts",
    component: AllContacts,
  },
  {
    path: "/admin/contact-status",
    exact: true,
    name: "ContactStatus",
    component: ContactStatus,
  },
  { path: "/admin/get-help", exact: true, name: "GetHelp", component: GetHelp },
  {
    path: "/admin/all-feedbacks",
    exact: true,
    name: "AllFeedbacks",
    component: AllFeedbacks,
  },

  { path: "/admin/faqs", exact: true, name: "Faqs", component: Faqs },
  {
    path: "/admin/settings",
    exact: true,
    name: "Settings",
    component: Settings,
  },
  {
    path: "/admin/all-reports",
    exact: true,
    name: "AllReports",
    component: AllReports,
  },
  {
    path: "/admin/reports",
    exact: true,
    name: "Reports",
    component: Reports,
  },
  {
    path: "/admin/activity-log",
    exact: true,
    name: "ActivityLog",
    component: ActivityLog,
  },
  {
    path: "/admin/blank",
    exact: true,
    name: "Blank",
    component: Blank,
  },
  {
    path:"/admin/404",
    exact:true,
    name:"Page404",
    component: Page404Dashboard
  }
];

export default routes;
