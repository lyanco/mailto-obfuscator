# mailto-obfuscator
Hide mailto links from spambots, show them to real people.

This script has been running on a publicly accessible web site since 2014 and has yet to receive a single automated spam message. It works because most spambot crawlers are too lazy or resource-constrained to execute JS, they just look for low hanging fruit mailtos in the page source.


## Instructions:
* Put your email address in the 'bits' array in reverse order
* Mix up regular letters with Char Codes as the example does
* Place this code within \<script\> tags inside whatever element you want to contain the mailto link. Don't put it too close to the top of the page content or you risk Google adding your email in plaintext in the search result description.

## Character reference:
* String.fromCharCode(97) is 'a'
* String.fromCharCode(122) is 'z'
* String.fromCharCode(46) or '\&\#x2E;' is '.'
* String.fromCharCode(64) or '\&\#x40;' is '@'
