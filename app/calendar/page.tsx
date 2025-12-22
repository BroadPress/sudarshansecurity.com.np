'use client'
import { useState } from "react";
import { events } from "../data/calendarEvents";

type CalendarEvent = {
  date: Date;
  title: string;
};

const Calendar = () => {
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const [currentDate] = useState<Date>(new Date());
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear());
  const [bannerEvents, setBannerEvents] = useState<CalendarEvent[] | null>(null);

  const daysOfWeek: string[] = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const getDaysInMonth = (month: number, year: number): number =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (month: number, year: number): number =>
    new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
  const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const handlePrevMonth = (): void => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
    setBannerEvents(null);
  };

  const handleNextMonth = (): void => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
    setBannerEvents(null);
  };

  const handleToday = (): void => {
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
    setSelectedDate(currentDate);
    setBannerEvents(null);
  };

  const isToday = (day: number | null): boolean => {
    if (!day) return false;
    return (
      day === currentDate.getDate() &&
      selectedMonth === currentDate.getMonth() &&
      selectedYear === currentDate.getFullYear()
    );
  };

  const handleDayClick = (day: number | null): void => {
    if (!day) return;

    const dayEvents = events.filter(
      (e: CalendarEvent) =>
        e.date.getDate() === day &&
        e.date.getMonth() === selectedMonth &&
        e.date.getFullYear() === selectedYear
    );

    setBannerEvents(dayEvents.length > 0 ? dayEvents : null);
  };

  return (
    <div className="h-full py-12 px-2 md:px-10 relative">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3 md:gap-4 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold">
            {monthNames[selectedMonth]} <span>{selectedYear}</span>
          </h2>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
            <button onClick={handlePrevMonth} className="flex items-center justify-center pb-2 px-2 rounded-md border border-gray-300 card h-9 hover:bg-gray-100 transition">
              <span className="text-4xl">‹</span>
            </button>

            <button onClick={handleNextMonth} className="flex items-center justify-center pb-2 px-2 card rounded-md border h-9 border-gray-300 hover:bg-gray-100 transition">
              <span className="text-4xl">›</span>
            </button>

            <button onClick={handleToday} className="px-3 card py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium transition">
              Today
            </button>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="appearance-none card px-3 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition"
            >
              {monthNames.map((month: string, index: number) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>
          </div>
        </div>

        {/* DAYS OF WEEK */}
        <div className="grid grid-cols-7 text-xs md:text-sm font-medium text-gray-600 border-b border-gray-200 mb-1">
          {daysOfWeek.map((day: string) => (
            <div key={day} className="text-center py-2 card">{day}</div>
          ))}
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-px border border-gray-200 text-xs sm:text-sm">
          {days.map((day: number | null, index: number) => {
            const dayHasEvents = events.some(
              (e: CalendarEvent) =>
                e.date.getDate() === day &&
                e.date.getMonth() === selectedMonth &&
                e.date.getFullYear() === selectedYear
            );

            return (
              <div
                key={index}
                onClick={() => handleDayClick(day)}
                className={`min-h-[70px] sm:min-h-20 p-1 sm:p-2 flex flex-col border border-gray-200 relative 
                  ${day === null ? "border-none" : "calendar cursor-pointer"} 
                  ${isToday(day) ? " border-blue-300" : ""}`}
              >
                {day && (
                  <>
                    <div
                      className={`self-center flex items-center justify-center ${
                        isToday(day)
                          ? "rounded-full bg-blue-500 px-2 py-px text-white font-bold text-xs"
                          : "text-[10px] sm:text-xs text-gray-500"
                      }`}
                    >
                      {day}
                    </div>

                    {dayHasEvents && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* EVENT BANNER */}
      {bannerEvents && (
        <div className="footer absolute bottom-0 top-0 left-0 z-50 w-64 h-full md:w-80 md:max-h-none overflow-y-auto p-4 bg-white border border-gray-200 rounded-t-lg md:rounded-md shadow-lg transition-all">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base md:text-lg font-semibold">Event Details</h3>
            <button onClick={() => setBannerEvents(null)}>
              <img src="/icons/cross.svg" className="w-4 h-4" />
            </button>
          </div>

          {bannerEvents.map((event: CalendarEvent, index: number) => (
            <div key={index} className="card2 mb-3 p-2 border-b border-gray-100">
              <p className="font-medium text-sm md:text-base">{event.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
