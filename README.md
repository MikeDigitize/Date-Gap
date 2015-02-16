# Date-Gap
Find the amount of days, weeks, months and years between two dates in JavaScript (IE7+)

<h2>Usage</h2>
Just include the minified script in the page and call using
```html
<script src="path-to-date-gap/date-gap.min.js"></script>
```

This gives you the <code>dateGap</code> function which returns several useful methods. To get the amount of days that have passed since a date to the present day, use the <code>getDaysSinceDate</code> method, passing in a date as comma seperated day, month, year:

```javascript

dateGap().getDaysSinceDate(21, 11, 1979);

```

Follow this same pattern but with the appropriate method to get the amount of weeks, months or years from a date to today:

```javascript

dateGap().getWeeksSinceDate(21, 11, 1979);
dateGap().getMonthsSinceDate(21, 11, 1979);
dateGap().getYearsSinceDate(21, 11, 1979);

```

To get the amount of days, weeks, months or years from the present day until a date use the appropriate until method:

```javascript

dateGap().getDaysUntilDate(21, 11, 2017);
dateGap().getDaysUntilDate(21, 11, 2017);
dateGap().getMonthsUntilDate(21, 11, 2017);
dateGap().getYearsUntilDate(21, 11, 2017);

```

To get the amount of days between two dates use the <code>getDaysBetweenTwoDates</code> method, passing in the first date to measure from and the second to measure to:

```javascript

dateGap().getDaysBetweenTwoDates(15, 2, 2013, 15, 2, 2015);

```
To get the amount of weeks, months, years between two dates pass in a number of days into any of the "since" methods. Passing in an amount of days into any of these methods instead of a day, month, year will return the appropriate unit amount (weeks, months, years) from this value.

```javascript

var days = dateGap().getDaysBetweenTwoDates(15, 2, 2013, 15, 2, 2015);
dateGap().getWeeksSinceDate(days);
dateGap().getMonthsSinceDate(days);
dateGap().getYearsSinceDate(days);

// is the same as 
dateGap().getWeeksSinceDate(dateGap().getDaysBetweenTwoDates(15, 2, 2013, 15, 2, 2015));

```
<h2>Dependencies</h2>

No dependencies!
