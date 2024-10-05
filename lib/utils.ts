import { DateTime } from "luxon";

import { DateResponse } from "@/types";

export const extractIdFromYouTubeUrl = (url: string): string => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : "";
};

type DateObject = {
  type: "date";
  date: DateResponse | null;
  id: string;
};

export const formatNotionDate = (dateData: DateObject | string): string => {
  if (typeof dateData === "string") {
    return DateTime.fromISO(dateData).toLocaleString({
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  }

  const date = dateData.date;
  if (date === null || date.start === null) return "";

  const startDate = DateTime.fromISO(date.start).toLocaleString({
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  if (date.end === null) return `${startDate}`;

  const endDate = DateTime.fromISO(date.end).toLocaleString({
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return `${startDate} → ${endDate}`;
};
