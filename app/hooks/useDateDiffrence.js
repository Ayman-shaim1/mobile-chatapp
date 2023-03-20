import React from "react";

const useDateDiffrence = date => {
  let dateString = "";
  const compDate = new Date(date);
  const sysDate = new Date();
  // comp second :
  if (
    compDate.getDate() === sysDate.getDate() &&
    compDate.getMonth() === sysDate.getMonth() &&
    compDate.getFullYear() === sysDate.getFullYear() &&
    compDate.getHours() === sysDate.getHours() &&
    compDate.getMinutes() === sysDate.getMinutes() &&
    compDate.getSeconds() !== sysDate.getSeconds()
  ) {
    dateString = `${sysDate.getSeconds() - compDate.getSeconds()} sec`;
  } else if (
    compDate.getDate() === sysDate.getDate() &&
    compDate.getMonth() === sysDate.getMonth() &&
    compDate.getFullYear() === sysDate.getFullYear() &&
    compDate.getHours() === sysDate.getHours() &&
    compDate.getMinutes() !== sysDate.getMinutes()
  ) {
    dateString = `${sysDate.getMinutes() - compDate.getMinutes()} min`;
  } else if (
    compDate.getDate() === sysDate.getDate() &&
    compDate.getMonth() === sysDate.getMonth() &&
    compDate.getFullYear() === sysDate.getFullYear() &&
    compDate.getHours() !== sysDate.getHours()
  ) {
    dateString = `${sysDate.getHours() - compDate.getHours()} ht`;
  } else if (
    compDate.getFullYear() === sysDate.getFullYear() &&
    compDate.getMonth() === sysDate.getMonth() &&
    compDate.getDate() !== sysDate.getDate()
  ) {
    dateString = `${sysDate.getDate() - compDate.getDate()} dy`;
  } else if (
    compDate.getFullYear() === sysDate.getFullYear() &&
    compDate.getMonth() !== sysDate.getMonth()
  ) {
    dateString = `${sysDate.getMonth() - compDate.getMonth()} mth`;
  } else if (compDate.getFullYear() !== sysDate.getFullYear()) {
    dateString = `${sysDate.getFullYear() - compDate.getFullYear()} yrs`;
  } else {
    dateString = `0 sec`;
  }
  return dateString;
};

export default useDateDiffrence;
