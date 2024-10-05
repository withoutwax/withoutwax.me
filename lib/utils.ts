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

export const notionBackgroundColor = (color: string) => {
  switch (color) {
    case "blue_background":
      return "bg-blue-100";
    case "brown_background":
      return "bg-stone-200";
    case "gray_background":
      return "bg-gray-100";
    case "green_background":
      return "bg-green-100";
    case "orange_background":
      return "bg-orange-100";
    case "pink_background":
      return "bg-pink-100";
    case "purple_background":
      return "bg-purple-100";
    case "red_background":
      return "bg-red-100";
    case "yellow_background":
      return "bg-yellow-100";
    default:
      return "";
  }
};

export const notionTextColor = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-700";
    case "brown":
      return "text-brown-700";
    case "gray":
      return "text-gray-700";
    case "green":
      return "text-green-700";
    case "orange":
      return "text-orange-700";
    case "pink":
      return "text-pink-700";
    case "purple":
      return "text-purple-700";
    case "red":
      return "text-red-700";
    case "yellow":
      return "text-yellow-500";
    default:
      return "";
  }
};
