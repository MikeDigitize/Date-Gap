# Date-Gap
Find the amount of minutes, hours, days, weeks, months and years between two dates in JavaScript (IE7+).

<h2>Usage</h2>
Just include the minified script in the page and call using:
```html
<script src="your-file-path/date-gap.min.js"></script>
```

This gives you the <code>dateGap</code> object which has several useful methods. To get the amount of days that have passed since a date to the present day, use the <code>getDaysSinceDate</code> method, passing in a date as comma seperated day, month, year:

```javascript

dateGap().getDaysSinceDate(21, 11, 1979);

```

Follow this same pattern but with the appropriate "since" method to get the amount of minutes, hours, weeks, months or years from a date to today:

```javascript

dateGap().getMinutesSinceDate(21, 11, 1979);
dateGap().getHoursSinceDate(21, 11, 1979);
dateGap().getWeeksSinceDate(21, 11, 1979);
dateGap().getMonthsSinceDate(21, 11, 1979);
dateGap().getYearsSinceDate(21, 11, 1979);

```

To get the amount of minutes, hours, days, weeks, months or years from the present day until a date use the appropriate "until" method:

```javascript

dateGap().getMinutesUntilDate(21, 11, 2017);
dateGap().getHoursUntilDate(21, 11, 2017);
dateGap().getDaysUntilDate(21, 11, 2017);
dateGap().getDaysUntilDate(21, 11, 2017);
dateGap().getMonthsUntilDate(21, 11, 2017);
dateGap().getYearsUntilDate(21, 11, 2017);

```

To get the amount of days between two dates use the <code>getDaysBetweenTwoDates</code> method, passing in the first date to measure from and the second to measure to:

```javascript

dateGap().getDaysBetweenTwoDates(15, 2, 2013, 15, 2, 2015);

```
To get the amount of minutes, hours, weeks, months or years between two dates pass a number of days into any of the "since" methods. Passing in a single number into any of these methods will return the appropriate amount of minutes, hours, weeks, months, years from that amount of days.

```javascript

var days = dateGap().getDaysBetweenTwoDates(15, 2, 2013, 15, 2, 2015);
dateGap().getMinutesSinceDate(days);
dateGap().getHoursSinceDate(days);
dateGap().getWeeksSinceDate(days);
dateGap().getMonthsSinceDate(days);
dateGap().getYearsSinceDate(days);

// is the same as 
dateGap().getMinutesSinceDate(dateGap().getDaysBetweenTwoDates(15, 2, 2013, 15, 2, 2015));

```
<h2>Dependencies</h2>

Be sure to have vanilla JavaScript installed!

<h2>Licence</h2>

Something I made for a site that I thought others may find useful. Hopefully someone may find it useful so do anything you like with it!
