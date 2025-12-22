const time = new Date();
const currentYear = time.getFullYear();
export type CalendarEvent = {
  date: Date;
  title: string;
};
export const events:CalendarEvent[] = [
  { date: new Date(currentYear, 0, 24), title: "International Day of Education" },
  { date: new Date(currentYear, 0, 26), title: "International Day for the Total Elimination of Nuclear Weapons" },
  { date: new Date(currentYear, 0, 27), title: "International Day of Commemoration in Memory of the Victims of the Holocaust" },

  { date: new Date(currentYear, 1, 2), title: "World Wetlands Day" },
  { date: new Date(currentYear, 1, 4), title: "World Cancer Day" },
  { date: new Date(currentYear, 1, 4), title: "International Day of Human Fraternity" },
  { date: new Date(currentYear, 1, 6), title: "International Day of Zero Tolerance to Female Genital Mutilation" },
  { date: new Date(currentYear, 1, 10), title: "World Pulses Day" },
  { date: new Date(currentYear, 1, 11), title: "International Day of Women and Girls in Science" },
  { date: new Date(currentYear, 1, 13), title: "World Radio Day" },
  { date: new Date(currentYear, 1, 20), title: "World Day of Social Justice" },
  { date: new Date(currentYear, 1, 21), title: "International Mother Language Day" },

  { date: new Date(currentYear, 2, 1), title: "World Seagrass Day" },
  { date: new Date(currentYear, 2, 1), title: "Zero Discrimination Day" },
  { date: new Date(currentYear, 2, 3), title: "World Wildlife Day" },
  { date: new Date(currentYear, 2, 3), title: "International Day for Ear and Hearing Care" },
  { date: new Date(currentYear, 2, 5), title: "International Day for Disarmament and Non-Proliferation Awareness" },
  { date: new Date(currentYear, 2, 8), title: "International Women's Day" },
  { date: new Date(currentYear, 2, 10), title: "International Day of Women Judges" },
  { date: new Date(currentYear, 2, 15), title: "International Day to Combat Islamophobia" },
  { date: new Date(currentYear, 2, 20), title: "International Day of Happiness" },
  { date: new Date(currentYear, 2, 21), title: "International Day for the Elimination of Racial Discrimination" },
  { date: new Date(currentYear, 2, 21), title: "World Poetry Day" },
  { date: new Date(currentYear, 2, 21), title: "World Down Syndrome Day" },
  { date: new Date(currentYear, 2, 21), title: "International Day of Forests" },
  { date: new Date(currentYear, 2, 21), title: "International Nowruz Day" },
  { date: new Date(currentYear, 2, 22), title: "World Water Day" },
  { date: new Date(currentYear, 2, 23), title: "World Meteorological Day" },
  { date: new Date(currentYear, 2, 24), title: "World Tuberculosis Day" },
  { date: new Date(currentYear, 2, 30), title: "International Day of Zero Waste" },

  { date: new Date(currentYear, 3, 2), title: "World Autism Awareness Day" },
  { date: new Date(currentYear, 3, 4), title: "International Day for Mine Awareness and Assistance in Mine Action" },
  { date: new Date(currentYear, 3, 6), title: "International Day of Sport for Development and Peace" },
  { date: new Date(currentYear, 3, 7), title: "World Health Day" },
  { date: new Date(currentYear, 3, 12), title: "International Day of Human Space Flight" },
  { date: new Date(currentYear, 3, 22), title: "International Mother Earth Day" },
  { date: new Date(currentYear, 3, 23), title: "World Book and Copyright Day" },
  { date: new Date(currentYear, 3, 25), title: "World Malaria Day" },
  { date: new Date(currentYear, 3, 30), title: "International Jazz Day" },

  { date: new Date(currentYear, 4, 1), title: "World Tuna Day" },
  { date: new Date(currentYear, 4, 3), title: "World Press Freedom Day" },
  { date: new Date(currentYear, 4, 15), title: "International Day of Families" },
  { date: new Date(currentYear, 4, 16), title: "International Day of Living Together in Peace" },
  { date: new Date(currentYear, 4, 16), title: "International Day of Light" },
  { date: new Date(currentYear, 4, 17), title: "World Telecommunication and Information Society Day" },
  { date: new Date(currentYear, 4, 20), title: "World Bee Day" },
  { date: new Date(currentYear, 4, 21), title: "World Day for Cultural Diversity for Dialogue and Development" },
  { date: new Date(currentYear, 4, 22), title: "International Day for Biological Diversity" },
  { date: new Date(currentYear, 4, 29), title: "International Day of UN Peacekeepers" },
  { date: new Date(currentYear, 4, 31), title: "World No Tobacco Day" },

  { date: new Date(currentYear, 5, 1), title: "Global Day of Parents" },
  { date: new Date(currentYear, 5, 3), title: "World Bicycle Day" },
  { date: new Date(currentYear, 5, 5), title: "World Environment Day" },
  { date: new Date(currentYear, 5, 8), title: "World Oceans Day" },
  { date: new Date(currentYear, 5, 12), title: "World Day Against Child Labour" },
  { date: new Date(currentYear, 5, 14), title: "World Blood Donor Day" },
  { date: new Date(currentYear, 5, 20), title: "World Refugee Day" },
  { date: new Date(currentYear, 5, 21), title: "International Day of Yoga" },
  { date: new Date(currentYear, 5, 26), title: "International Day against Drug Abuse and Illicit Trafficking" },

  { date: new Date(currentYear, 6, 11), title: "World Population Day" },
  { date: new Date(currentYear, 6, 30), title: "International Day of Friendship" },

  { date: new Date(currentYear, 7, 9), title: "International Day of the World's Indigenous Peoples" },
  { date: new Date(currentYear, 7, 12), title: "International Youth Day" },
  { date: new Date(currentYear, 7, 19), title: "World Humanitarian Day" },

  { date: new Date(currentYear, 8, 5), title: "International Day of Charity" },
  { date: new Date(currentYear, 8, 8), title: "International Literacy Day" },
  { date: new Date(currentYear, 8, 21), title: "International Day of Peace" },
  { date: new Date(currentYear, 8, 25), title: "World Maritime Day" },
  { date: new Date(currentYear, 8, 27), title: "World Tourism Day" },

  { date: new Date(currentYear, 9, 1), title: "International Day of Older Persons" },
  { date: new Date(currentYear, 9, 2), title: "International Day of Non-Violence" },
  { date: new Date(currentYear, 9, 5), title: "World Teachers' Day" },
  { date: new Date(currentYear, 9, 10), title: "World Mental Health Day" },
  { date: new Date(currentYear, 9, 16), title: "World Food Day" },
  { date: new Date(currentYear, 9, 24), title: "United Nations Day" },

  { date: new Date(currentYear, 10, 14), title: "World Diabetes Day" },
  { date: new Date(currentYear, 10, 20), title: "Universal Children's Day" },

  { date: new Date(currentYear, 11, 1), title: "World AIDS Day" },
  { date: new Date(currentYear, 11, 3), title: "International Day of Persons with Disabilities" },
  { date: new Date(currentYear, 11, 10), title: "Human Rights Day" },
];
