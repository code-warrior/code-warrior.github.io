/*jslint browser, es6, single, for, devel, this */
/*global window */

let paragraphs = document.getElementsByTagName('p');

paragraphs[0].innerHTML = 'The method <code>getElementsByTagName</code> creates an array of all the elements on a page whose name matches the parameter passed to it. For example, <code>getElementsByTagName(\'p\')</code> creates an array of the six paragraphs in this page: This paragraph + five empty paragraphs populated with numbers 1&#8202;–&#8202;5.';

for (let i = 1; i < paragraphs.length; i += 1) {
    paragraphs[i].textContent = i;
}
