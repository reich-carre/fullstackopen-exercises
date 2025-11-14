

const wmoCode = {
    // Group 0: Clear Sky / Cloud Coverage
    0: { day: 'wi-day-sunny', night: 'wi-night-clear', dayLabel: 'Clear Sky', nightLabel: 'Clear Sky' },
    1: { day: 'wi-day-cloudy-high', night: 'wi-night-alt-cloudy-high', dayLabel: 'Mainly Clear', nightLabel: 'Mainly Clear' },
    2: { day: 'wi-day-cloudy', night: 'wi-night-alt-cloudy', dayLabel: 'Partly Cloudy', nightLabel: 'Partly Cloudy' },
    3: { day: 'wi-cloudy', night: 'wi-cloudy', dayLabel: 'Overcast', nightLabel: 'Overcast' },

    // Group 4: Fog and Deposit
    45: { day: 'wi-fog', night: 'wi-fog', dayLabel: 'Fog', nightLabel: 'Fog' },
    48: { day: 'wi-fog', night: 'wi-fog', dayLabel: 'Depositing Rime Fog', nightLabel: 'Depositing Rime Fog' },

    // Group 5: Drizzle
    51: { day: 'wi-sprinkle', night: 'wi-night-alt-sprinkle', dayLabel: 'Light Drizzle', nightLabel: 'Light Drizzle' },
    53: { day: 'wi-sprinkle', night: 'wi-night-alt-sprinkle', dayLabel: 'Moderate Drizzle', nightLabel: 'Moderate Drizzle' },
    55: { day: 'wi-sprinkle', night: 'wi-night-alt-sprinkle', dayLabel: 'Dense Drizzle', nightLabel: 'Dense Drizzle' },
    56: { day: 'wi-showers', night: 'wi-night-alt-showers', dayLabel: 'Light Freezing Drizzle', nightLabel: 'Light Freezing Drizzle' },
    57: { day: 'wi-showers', night: 'wi-night-alt-showers', dayLabel: 'Dense Freezing Drizzle', nightLabel: 'Dense Freezing Drizzle' },

    // Group 6: Rain
    61: { day: 'wi-rain', night: 'wi-night-alt-rain', dayLabel: 'Light Rain', nightLabel: 'Light Rain' },
    63: { day: 'wi-rain', night: 'wi-night-alt-rain', dayLabel: 'Moderate Rain', nightLabel: 'Moderate Rain' },
    65: { day: 'wi-rain', night: 'wi-night-alt-rain', dayLabel: 'Heavy Rain', nightLabel: 'Heavy Rain' },
    66: { day: 'wi-sleet', night: 'wi-night-alt-sleet', dayLabel: 'Light Freezing Rain', nightLabel: 'Light Freezing Rain' },
    67: { day: 'wi-sleet', night: 'wi-night-alt-sleet', dayLabel: 'Heavy Freezing Rain', nightLabel: 'Heavy Freezing Rain' },

    // Group 7: Snow
    71: { day: 'wi-snow', night: 'wi-night-alt-snow', dayLabel: 'Slight Snow Fall', nightLabel: 'Slight Snow Fall' },
    73: { day: 'wi-snow', night: 'wi-night-alt-snow', dayLabel: 'Moderate Snow Fall', nightLabel: 'Moderate Snow Fall' },
    75: { day: 'wi-snow', night: 'wi-night-alt-snow', dayLabel: 'Heavy Snow Fall', nightLabel: 'Heavy Snow Fall' },
    77: { day: 'wi-snow', night: 'wi-night-alt-snow', dayLabel: 'Snow Grains', nightLabel: 'Snow Grains' },

    // Group 8: Showers
    80: { day: 'wi-showers', night: 'wi-night-alt-showers', dayLabel: 'Light Rain Showers', nightLabel: 'Light Rain Showers' },
    81: { day: 'wi-showers', night: 'wi-night-alt-showers', dayLabel: 'Moderate Rain Showers', nightLabel: 'Moderate Rain Showers' },
    82: { day: 'wi-showers', night: 'wi-night-alt-showers', dayLabel: 'Violent Rain Showers', nightLabel: 'Violent Rain Showers' },
    85: { day: 'wi-snow', night: 'wi-night-alt-snow', dayLabel: 'Light Snow Showers', nightLabel: 'Light Snow Showers' },
    86: { day: 'wi-snow', night: 'wi-night-alt-snow', dayLabel: 'Heavy Snow Showers', nightLabel: 'Heavy Snow Showers' },

    // Group 9: Thunderstorms (requires additional condition codes 96/99, but Open-Meteo simplifies with 95)
    95: { day: 'wi-thunderstorm', night: 'wi-night-alt-thunderstorm', dayLabel: 'Thunderstorm', nightLabel: 'Thunderstorm' },
    96: { day: 'wi-storm-showers', night: 'wi-night-alt-storm-showers', dayLabel: 'Thunderstorm with Hail', nightLabel: 'Thunderstorm with Hail' },
    99: { day: 'wi-storm-showers', night: 'wi-night-alt-storm-showers', dayLabel: 'Heavy Thunderstorm with Hail', nightLabel: 'Heavy Thunderstorm with Hail' },

    // Fallback/Unknown
    999: { day: 'wi-na', night: 'wi-na', dayLabel: 'Unknown', nightLabel: 'Unknown' } 
};

export default wmoCode