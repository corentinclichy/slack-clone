import { Message } from "@styled-icons/material-rounded/Message";
import { Inbox } from "@styled-icons/material/Inbox";
import { Drafts } from "@styled-icons/material/Drafts";
import { BookmarkBorder } from "@styled-icons/material/BookmarkBorder";
import { People } from "@styled-icons/material/People";
import { Apps } from "@styled-icons/material/Apps";

export const sidebarItems = [
  {
    id: 1,
    name: "Thread",
    icon: <Message size={25} />,
  },
  {
    id: 2,
    name: "All DMs",
    icon: <Inbox size={25} />,
  },
  {
    id: 3,
    name: "Mentions & Reactions",
    icon: <Drafts size={25} />,
  },
  {
    id: 4,
    name: "Save Items",
    icon: <BookmarkBorder size={25} />,
  },
  {
    id: 5,
    name: "Peoples & Groups",
    icon: <People size={25} />,
  },
  {
    id: 6,
    name: "More",
    icon: <Apps size={25} />,
  },
];

export const sidebarChannels = [
  {
    name: "# Channel 1",
  },
  {
    name: "# Channel 2",
  },
  {
    name: "# Channel 3",
  },
  {
    name: "# Channel 4",
  },
  {
    name: "# Channel 5",
  },
];
