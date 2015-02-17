var dateGap = (function() {
 
    function getDaysInMonths(m, y) {
        return /8|3|5|10/.test(--m) ? 30 : m == 1 ? (!(y % 4) && y % 100) || !(y % 400) ? 29 : 28 : 31;
    }
 
    function isLeapYear(y) {
		return getDaysInMonths(2, y) === 29;
    }
 
    function getTodaysDay() {
		return new Date().getDate();
    }
 
    function getTodaysMonth() {
		return new Date().getMonth() + 1;
    }
 
    function getTodaysYear() {
		return new Date().getFullYear();
    }
 
    function getDaysBetweenTwoDates(d1, m1, y1, d2, m2, y2) {
 
		var diff = getDifferenceInYears(y2, y1), total = 0;	
	 
		if(!diff) {
		    return getDaysBetweenTwoDatesInSameYear(d1, m1, d2, m2, y1);
		}
		else {
	 
		    if(diff === 1) {	
	 
			return getDaysBetweenTwoDatesInSameYear(d1, m1, 31, 12, y1) +
				getDaysBetweenTwoDatesInSameYear(1, 1, d2, m2, y2);
	 
		    }
		    else {
	 
		        total += getDaysInYears(y1 + 1, y2);			
		
		        total += getDaysBetweenTwoDatesInSameYear(d1, m1, 31, 12, y1) +
				getDaysBetweenTwoDatesInSameYear(1, 1, d2, m2, y2);
	 
		        return total;	
	 
		    }
 
        }
 
    }
 
    function getDaysBetweenTwoDatesInSameYear(d1, m1, d2, m2, y) {
 
		var total = 0, leapYear;
	 
		if(m1 === m2) {
		    return d2 - d1;
		}
		else {
	 
		    leapYear = isLeapYear(y) ? true : false;
	 
		    if(m2 - m1 === 1) {				
				return getDaysRemainingFromMonth(d1, m1, leapYear) + d2;				
		    } 
		    else {
	 
				total+= getDaysRemainingFromMonth(d1, m1, leapYear) + d2;
				total += getDaysInMonthsBetween(m1 + 1, m2, y);
	 
			return total;
	 
		    }
	 
		}
 
    }
 
    function getDaysInMonthsBetween(startMonth, stopMonth, y) {
 
		for(var total = 0; startMonth < stopMonth; startMonth++) {
		    total += getDaysInMonths(startMonth, y);				
		}
	 
		return total;
 
    }
 
    function getDaysInYears(startYear, stopYear) {
 
		for(var total = 0; startYear < stopYear; startYear++) {
		    total += getDaysBetweenTwoDatesInSameYear(1, 1, 31, 12, startYear);
		}
	 
		return total;
 
    }
 
    function getDifferenceInYears(y1, y2) {
		return y1 - y2;
    }
 
    function getDaysRemainingFromMonth(d, m, ly) {
 
		var y = ly ? 2016 : 2015;
		d = d === 1 ? 0 : d;
		return getDaysInMonths(m, y) - d;
 
    }
 
    function getWeeksFromDays(d) {
		return Number((d / 7).toFixed(1));
    }
 
    function getHoursFromDays(d) {
		return d * 24;
    }

    function getMinsFromDays(d) {
		return (d * 24) * 60;
    }
 
    function getMonthsFromDays(d) {
 		return Number((getYearsFromDays(d) * 12).toFixed(2));
    }
 
    function getYearsFromDays(d) {
		return Number((d / 365).toFixed(2));
    }	
 
    function getDaysFromDate(d, m, y) {
		return getDaysBetweenTwoDates(d, m, y, getTodaysDay(), getTodaysMonth(), getTodaysYear());
    }
 
    function getDaysToDate(d, m, y) {
		return getDaysBetweenTwoDates(getTodaysDay(), getTodaysMonth(), getTodaysYear(), d, m, y);
    }
 
    function daysOrDate(args, fn) {
		
		if(args.length > 1) {
		    return fn(args[0], args[1], args[2]);
		}
		else {
		    return args[0];
		}
 
    }
 
    return {
 
		getDaysSinceDate : function(d, m, y) {
		    return getDaysFromDate(d, m, y);
		},
		getDaysUntilDate : function(d, m, y) {
		    return getDaysToDate(d, m, y);
		},
		getMinutesSinceDate : function(d, m, y) {
			return getMinsFromDays(daysOrDate(arguments, getDaysFromDate));
		},
		getHoursSinceDate : function(d, m, y) {
			return getHoursFromDays(daysOrDate(arguments, getDaysFromDate));
		},
		getWeeksSinceDate : function(d, m, y) {				
		    return getWeeksFromDays(daysOrDate(arguments, getDaysFromDate));
		},
		getMonthsSinceDate : function(d, m, y) {
		    return getMonthsFromDays(daysOrDate(arguments, getDaysFromDate));
		},
		getYearsSinceDate : function(d, m, y) {
		    return getYearsFromDays(daysOrDate(arguments, getDaysFromDate));
		},
		getWeeksUntilDate : function(d, m, y) {
		    return getWeeksFromDays(getDaysToDate(d, m, y));
		},
		getMonthsUntilDate : function(d, m, y) {
		    return getMonthsFromDays(getDaysToDate(d, m, y));
		},
		getYearsUntilDate : function(d, m, y) {
		    return getYearsFromDays(getDaysToDate(d, m, y));
		},
		getDaysBetweenTwoDates : function(d1, m1, y1, d2, m2, y2) {
		    return getDaysBetweenTwoDates(d1, m1, y1, d2, m2, y2);
		}
 
    }		
 
})();