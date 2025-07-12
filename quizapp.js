const initialQuizData = 
[
   {
    "question": "1. What does HTML stand for?",
    "options": ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
    "answer": "Hyper Text Markup Language"
  },
  {
    "question": "2. Which HTML tag is used to define the largest heading?",
    "options": ["&lt;h1&gt;", "&lt;h6&gt;", "&lt;heading&gt;", "&lt;header&gt;"],
    "answer": "&lt;h1&gt;"
  },
  {
    "question": "3. What is the correct HTML element for inserting a line break?",
    "options": ["&lt;lb&gt;", "&lt;break&gt;", "&lt;br&gt;", "&lt;newline&gt;"],
    "answer": "&lt;br&gt;"
  },
  {
    "question": "4. Which HTML attribute is used to define inline styles?",
    "options": ["class", "style", "styles", "font"],
    "answer": "style"
  },
  {
    "question": "5. What is the correct HTML for creating a hyperlink?",
    "options": ["&lt;a url='http://www.example.com'&gt;Example&lt;/a&gt;", "&lt;a href='http://www.example.com'&gt;Example&lt;/a&gt;", "&lt;a&gt;http://www.example.com&lt;/a&gt;", "&lt;link&gt;http://www.example.com&lt;/link&gt;"],
    "answer": "&lt;a href='http://www.example.com'&gt;Example&lt;/a&gt;"
  },
  {
    "question": "6. Which HTML tag is used to display images?",
    "options": ["&lt;img&gt;", "&lt;image&gt;", "&lt;picture&gt;", "&lt;src&gt;"],
    "answer": "&lt;img&gt;"
  },
  {
    "question": "7. What is the correct HTML for making a checkbox?",
    "options": ["&lt;input type='checkbox'&gt;", "&lt;input type='check'&gt;", "&lt;checkbox&gt;", "&lt;input type='tick'&gt;"],
    "answer": "&lt;input type='checkbox'&gt;"
  },
  {
    "question": "8. Which HTML element is used to specify a footer for a document or section?",
    "options": ["&lt;bottom&gt;", "&lt;footer&gt;", "&lt;section&gt;", "&lt;foot&gt;"],
    "answer": "&lt;footer&gt;"
  },
  {
    "question": "9. What is the correct HTML for making a text input field?",
    "options": ["&lt;input type='text'&gt;", "&lt;textfield&gt;", "&lt;input type='textfield'&gt;", "&lt;textinput&gt;"],
    "answer": "&lt;input type='text'&gt;"
  },
  {
    "question": "10. Which HTML attribute is used to specify an alternate text for an image?",
    "options": ["title", "alt", "src", "longdesc"],
    "answer": "alt"
  },
  {
    "question": "11. What is the correct HTML for making a drop-down list?",
    "options": ["&lt;input type='dropdown'&gt;", "&lt;select&gt;", "&lt;input type='list'&gt;", "&lt;dropdown&gt;"],
    "answer": "&lt;select&gt;"
  },
  {
    "question": "12. Which HTML element is used to specify a header for a document or section?",
    "options": ["&lt;head&gt;", "&lt;header&gt;", "&lt;top&gt;", "&lt;section&gt;"],
    "answer": "&lt;header&gt;"
  },
  {
    "question": "13. What is the correct HTML for making a text area?",
    "options": ["&lt;input type='textarea'&gt;", "&lt;textarea&gt;", "&lt;input type='textbox'&gt;", "&lt;textbox&gt;"],
    "answer": "&lt;textarea&gt;"
  },
  {
    "question": "14. Which HTML tag is used to define an internal style sheet?",
    "options": ["&lt;style&gt;", "&lt;css&gt;", "&lt;script&gt;", "&lt;styles&gt;"],
    "answer": "&lt;style&gt;"
  },
  {
    "question": "15. What is the correct HTML for inserting a background image?",
    "options": ["&lt;background img='background.gif'&gt;", "&lt;body style='background-image:url(background.gif)'&gt;", "&lt;body bg='background.gif'&gt;", "&lt;img background='background.gif'&gt;"],
    "answer": "&lt;body style='background-image:url(background.gif)'&gt;"
  },
  {
    "question": "16. Which HTML element is used to define important text?",
    "options": ["&lt;strong&gt;", "&lt;b&gt;", "&lt;important&gt;", "&lt;i&gt;"],
    "answer": "&lt;strong&gt;"
  },
  {
    "question": "17. What is the correct HTML for creating a numbered list?",
    "options": ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;nl&gt;", "&lt;list&gt;"],
    "answer": "&lt;ol&gt;"
  },
  {
    "question": "18. Which HTML attribute is used to define the language of a document?",
    "options": ["language", "lang", "xml:lang", "locale"],
    "answer": "lang"
  },
  {
    "question": "19. What is the correct HTML for making a button?",
    "options": ["&lt;input type='button'&gt;", "&lt;button&gt;", "&lt;input type='submit'&gt;", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "20. Which HTML element is used to group related form elements?",
    "options": ["&lt;group&gt;", "&lt;fieldset&gt;", "&lt;form-group&gt;", "&lt;div&gt;"],
    "answer": "&lt;fieldset&gt;"
  },
  {
    "question": "21. What is the correct HTML for making an unordered list?",
    "options": ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;list&gt;", "&lt;ulist&gt;"],
    "answer": "&lt;ul&gt;"
  },
  {
    "question": "22. Which HTML tag is used to define a table?",
    "options": ["&lt;table&gt;", "&lt;tab&gt;", "&lt;tbody&gt;", "&lt;tr&gt;"],
    "answer": "&lt;table&gt;"
  },
  {
    "question": "23. What is the correct HTML for making a password field?",
    "options": ["&lt;input type='password'&gt;", "&lt;input type='pass'&gt;", "&lt;password&gt;", "&lt;input type='hidden'&gt;"],
    "answer": "&lt;input type='password'&gt;"
  },
  {
    "question": "24. Which HTML element is used to define emphasized text?",
    "options": ["&lt;em&gt;", "&lt;i&gt;", "&lt;italic&gt;", "&lt;emphasis&gt;"],
    "answer": "&lt;em&gt;"
  },
  {
    "question": "25. What is the correct HTML for inserting a comment?",
    "options": ["&lt;!-- This is a comment --&gt;", "// This is a comment", "/* This is a comment */", "&lt;comment&gt;This is a comment&lt;/comment&gt;"],
    "answer": "&lt;!-- This is a comment --&gt;"
  },
  {
    "question": "26. Which HTML attribute is used to specify the URL of a linked document?",
    "options": ["src", "href", "link", "url"],
    "answer": "href"
  },
  {
    "question": "27. What is the correct HTML for making a radio button?",
    "options": ["&lt;input type='radio'&gt;", "&lt;input type='button'&gt;", "&lt;radio&gt;", "&lt;input type='circle'&gt;"],
    "answer": "&lt;input type='radio'&gt;"
  },
  {
    "question": "28. Which HTML element is used to define a section in a document?",
    "options": ["&lt;section&gt;", "&lt;div&gt;", "&lt;article&gt;", "&lt;part&gt;"],
    "answer": "&lt;section&gt;"
  },
  {
    "question": "29. What is the correct HTML for making a submit button?",
    "options": ["&lt;input type='submit'&gt;", "&lt;input type='send'&gt;", "&lt;button type='submit'&gt;", "Both A and C"],
    "answer": "Both A and C"
  },
  {
    "question": "30. Which HTML tag is used to define a table row?",
    "options": ["&lt;tr&gt;", "&lt;row&gt;", "&lt;td&gt;", "&lt;table-row&gt;"],
    "answer": "&lt;tr&gt;"
  },
  {
    "question": "31. What is the correct HTML for making italic text?",
    "options": ["&lt;i&gt;", "&lt;italic&gt;", "&lt;em&gt;", "Both A and C"],
    "answer": "Both A and C"
  },
  {
    "question": "32. Which HTML attribute is used to specify that an input field must be filled out?",
    "options": ["validate", "required", "placeholder", "mandatory"],
    "answer": "required"
  },
  {
    "question": "33. What is the correct HTML for making bold text?",
    "options": ["&lt;b&gt;", "&lt;bold&gt;", "&lt;strong&gt;", "Both A and C"],
    "answer": "Both A and C"
  },
  {
    "question": "34. Which HTML element is used to define a description list?",
    "options": ["&lt;dl&gt;", "&lt;desc&gt;", "&lt;description&gt;", "&lt;dlist&gt;"],
    "answer": "&lt;dl&gt;"
  },
  {
    "question": "35. What is the correct HTML for making a hidden input field?",
    "options": ["&lt;input type='hidden'&gt;", "&lt;input type='hide'&gt;", "&lt;hidden&gt;", "&lt;input type='invisible'&gt;"],
    "answer": "&lt;input type='hidden'&gt;"
  },
  {
    "question": "36. Which HTML tag is used to define a table cell?",
    "options": ["&lt;td&gt;", "&lt;cell&gt;", "&lt;tc&gt;", "&lt;table-cell&gt;"],
    "answer": "&lt;td&gt;"
  },
  {
    "question": "37. What is the correct HTML for making a file upload field?",
    "options": ["&lt;input type='file'&gt;", "&lt;input type='upload'&gt;", "&lt;file&gt;", "&lt;upload&gt;"],
    "answer": "&lt;input type='file'&gt;"
  },
  {
    "question": "38. Which HTML element is used to define navigation links?",
    "options": ["&lt;nav&gt;", "&lt;navigation&gt;", "&lt;menu&gt;", "&lt;links&gt;"],
    "answer": "&lt;nav&gt;"
  },
  {
    "question": "39. What is the correct HTML for making a reset button?",
    "options": ["&lt;input type='reset'&gt;", "&lt;input type='clear'&gt;", "&lt;reset&gt;", "&lt;button type='reset'&gt;"],
    "answer": "&lt;input type='reset'&gt;"
  },
  {
    "question": "40. Which HTML attribute is used to specify the target of a hyperlink?",
    "options": ["target", "href", "link", "to"],
    "answer": "target"
  },
  {
    "question": "41. What is the correct HTML for making a date input field?",
    "options": ["&lt;input type='date'&gt;", "&lt;input type='datetime'&gt;", "&lt;date&gt;", "&lt;input type='calendar'&gt;"],
    "answer": "&lt;input type='date'&gt;"
  },
  {
    "question": "42. Which HTML element is used to define an article?",
    "options": ["&lt;article&gt;", "&lt;section&gt;", "&lt;content&gt;", "&lt;post&gt;"],
    "answer": "&lt;article&gt;"
  },
  {
    "question": "43. What is the correct HTML for making a color picker?",
    "options": ["&lt;input type='color'&gt;", "&lt;input type='colorpicker'&gt;", "&lt;color&gt;", "&lt;picker&gt;"],
    "answer": "&lt;input type='color'&gt;"
  },
  {
    "question": "44. Which HTML tag is used to define a table header?",
    "options": ["&lt;th&gt;", "&lt;thead&gt;", "&lt;header&gt;", "&lt;table-header&gt;"],
    "answer": "&lt;th&gt;"
  },
  {
    "question": "45. What is the correct HTML for making a range slider?",
    "options": ["&lt;input type='range'&gt;", "&lt;input type='slider'&gt;", "&lt;range&gt;", "&lt;slider&gt;"],
    "answer": "&lt;input type='range'&gt;"
  },
  {
    "question": "46. Which HTML element is used to define an aside content?",
    "options": ["&lt;aside&gt;", "&lt;sidebar&gt;", "&lt;side&gt;", "&lt;secondary&gt;"],
    "answer": "&lt;aside&gt;"
  },
  {
    "question": "47. What is the correct HTML for making a number input field?",
    "options": ["&lt;input type='number'&gt;", "&lt;input type='numeric'&gt;", "&lt;number&gt;", "&lt;input type='int'&gt;"],
    "answer": "&lt;input type='number'&gt;"
  },
  {
    "question": "48. Which HTML attribute is used to specify placeholder text?",
    "options": ["placeholder", "hint", "default", "example"],
    "answer": "placeholder"
  },
  {
    "question": "49. What is the correct HTML for making an email input field?",
    "options": ["&lt;input type='email'&gt;", "&lt;input type='e-mail'&gt;", "&lt;email&gt;", "&lt;input type='mail'&gt;"],
    "answer": "&lt;input type='email'&gt;"
  },
  {
    "question": "50. Which HTML element is used to define a main content area?",
    "options": ["&lt;main&gt;", "&lt;content&gt;", "&lt;primary&gt;", "&lt;body&gt;"],
    "answer": "&lt;main&gt;"
  },
  {
    "question": "51. What is the correct HTML for making a telephone input field?",
    "options": ["&lt;input type='tel'&gt;", "&lt;input type='phone'&gt;", "&lt;tel&gt;", "&lt;input type='telephone'&gt;"],
    "answer": "&lt;input type='tel'&gt;"
  },
  {
    "question": "52. Which HTML attribute is used to specify the character encoding?",
    "options": ["charset", "encoding", "encode", "character-set"],
    "answer": "charset"
  },
  {
    "question": "53. What is the correct HTML for making a search input field?",
    "options": ["&lt;input type='search'&gt;", "&lt;input type='find'&gt;", "&lt;search&gt;", "&lt;input type='query'&gt;"],
    "answer": "&lt;input type='search'&gt;"
  },
  {
    "question": "54. Which HTML element is used to define a figure with caption?",
    "options": ["&lt;figure&gt;", "&lt;img&gt;", "&lt;caption&gt;", "&lt;picture&gt;"],
    "answer": "&lt;figure&gt;"
  },
  {
    "question": "55. What is the correct HTML for making a URL input field?",
    "options": ["&lt;input type='url'&gt;", "&lt;input type='link'&gt;", "&lt;url&gt;", "&lt;input type='website'&gt;"],
    "answer": "&lt;input type='url'&gt;"
  },
  {
    "question": "56. Which HTML tag is used to define a caption for a table?",
    "options": ["&lt;caption&gt;", "&lt;title&gt;", "&lt;header&gt;", "&lt;table-caption&gt;"],
    "answer": "&lt;caption&gt;"
  },
  {
    "question": "57. What is the correct HTML for making a time input field?",
    "options": ["&lt;input type='time'&gt;", "&lt;input type='clock'&gt;", "&lt;time&gt;", "&lt;input type='hour'&gt;"],
    "answer": "&lt;input type='time'&gt;"
  },
  {
    "question": "58. Which HTML element is used to define a dialog box?",
    "options": ["&lt;dialog&gt;", "&lt;modal&gt;", "&lt;popup&gt;", "&lt;box&gt;"],
    "answer": "&lt;dialog&gt;"
  },
  {
    "question": "59. What is the correct HTML for making a datetime-local input field?",
    "options": ["&lt;input type='datetime-local'&gt;", "&lt;input type='datetime'&gt;", "&lt;datetime&gt;", "&lt;input type='local-datetime'&gt;"],
    "answer": "&lt;input type='datetime-local'&gt;"
  },
  {
    "question": "60. Which HTML attribute is used to specify the maximum value for an input field?",
    "options": ["max", "maximum", "maxlength", "limit"],
    "answer": "max"
  },
  {
    "question": "61. What is the correct HTML for making a month input field?",
    "options": ["&lt;input type='month'&gt;", "&lt;input type='monthly'&gt;", "&lt;month&gt;", "&lt;input type='mon'&gt;"],
    "answer": "&lt;input type='month'&gt;"
  },
  {
    "question": "62. Which HTML element is used to define a progress bar?",
    "options": ["&lt;progress&gt;", "&lt;bar&gt;", "&lt;meter&gt;", "&lt;loading&gt;"],
    "answer": "&lt;progress&gt;"
  },
  {
    "question": "63. What is the correct HTML for making a week input field?",
    "options": ["&lt;input type='week'&gt;", "&lt;input type='weekly'&gt;", "&lt;week&gt;", "&lt;input type='wk'&gt;"],
    "answer": "&lt;input type='week'&gt;"
  },
  {
    "question": "64. Which HTML attribute is used to specify the minimum value for an input field?",
    "options": ["min", "minimum", "minlength", "low"],
    "answer": "min"
  },
  {
    "question": "65. What is the correct HTML for making multiple selections in a select element?",
    "options": ["&lt;select multiple&gt;", "&lt;select multi&gt;", "&lt;select type='multiple'&gt;", "&lt;multiselect&gt;"],
    "answer": "&lt;select multiple&gt;"
  },
  {
    "question": "66. Which HTML element is used to define a meter/gauge?",
    "options": ["&lt;meter&gt;", "&lt;gauge&gt;", "&lt;progress&gt;", "&lt;measure&gt;"],
    "answer": "&lt;meter&gt;"
  },
  {
    "question": "67. What is the correct HTML for grouping options in a select element?",
    "options": ["&lt;optgroup&gt;", "&lt;group&gt;", "&lt;option-group&gt;", "&lt;select-group&gt;"],
    "answer": "&lt;optgroup&gt;"
  },
  {
    "question": "68. Which HTML attribute is used to specify the step value for an input field?",
    "options": ["step", "increment", "interval", "steps"],
    "answer": "step"
  },
  {
    "question": "69. What is the correct HTML for making a label for a form element?",
    "options": ["&lt;label&gt;", "&lt;n&gt;", "&lt;title&gt;", "&lt;caption&gt;"],
    "answer": "&lt;label&gt;"
  },
  {
    "question": "70. Which HTML element is used to define keyboard input?",
    "options": ["&lt;kbd&gt;", "&lt;key&gt;", "&lt;keyboard&gt;", "&lt;input&gt;"],
    "answer": "&lt;kbd&gt;"
  },
  {
    "question": "71. What is the correct HTML for making a legend for a fieldset?",
    "options": ["&lt;legend&gt;", "&lt;title&gt;", "&lt;caption&gt;", "&lt;header&gt;"],
    "answer": "&lt;legend&gt;"
  },
  {
    "question": "72. Which HTML attribute is used to specify the form an element belongs to?",
    "options": ["form", "formid", "belongs-to", "parent"],
    "answer": "form"
  },
  {
    "question": "73. What is the correct HTML for making a datalist?",
    "options": ["&lt;datalist&gt;", "&lt;list&gt;", "&lt;options&gt;", "&lt;data&gt;"],
    "answer": "&lt;datalist&gt;"
  },
  {
    "question": "74. Which HTML element is used to define sample output?",
    "options": ["&lt;samp&gt;", "&lt;output&gt;", "&lt;sample&gt;", "&lt;result&gt;"],
    "answer": "&lt;samp&gt;"
  },
  {
    "question": "75. What is the correct HTML for making an output element?",
    "options": ["&lt;output&gt;", "&lt;result&gt;", "&lt;display&gt;", "&lt;show&gt;"],
    "answer": "&lt;output&gt;"
  },
  {
    "question": "76. Which HTML attribute is used to specify autocomplete behavior?",
    "options": ["autocomplete", "autofill", "complete", "auto"],
    "answer": "autocomplete"
  },
  {
    "question": "77. What is the correct HTML for defining a variable?",
    "options": ["&lt;var&gt;", "&lt;variable&gt;", "&lt;v&gt;", "&lt;param&gt;"],
    "answer": "&lt;var&gt;"
  },
  {
    "question": "78. Which HTML element is used to define a line break opportunity?",
    "options": ["&lt;wbr&gt;", "&lt;br&gt;", "&lt;break&gt;", "&lt;wrap&gt;"],
    "answer": "&lt;wbr&gt;"
  },
  {
    "question": "79. What is the correct HTML for making text that should be isolated for formatting?",
    "options": ["&lt;bdi&gt;", "&lt;isolate&gt;", "&lt;separate&gt;", "&lt;format&gt;"],
    "answer": "&lt;bdi&gt;"
  },
  {
    "question": "80. Which HTML attribute is used to specify the direction of text?",
    "options": ["dir", "direction", "text-direction", "orientation"],
    "answer": "dir"
  },
  {
    "question": "81. What is the correct HTML for making text with a different directionality?",
    "options": ["&lt;bdo&gt;", "&lt;direction&gt;", "&lt;dir&gt;", "&lt;rtl&gt;"],
    "answer": "&lt;bdo&gt;"
  },
  {
    "question": "82. Which HTML element is used to define a short quotation?",
    "options": ["&lt;q&gt;", "&lt;quote&gt;", "&lt;blockquote&gt;", "&lt;cite&gt;"],
    "answer": "&lt;q&gt;"
  },
  {
    "question": "83. What is the correct HTML for making a long quotation?",
    "options": ["&lt;blockquote&gt;", "&lt;q&gt;", "&lt;quote&gt;", "&lt;longquote&gt;"],
    "answer": "&lt;blockquote&gt;"
  },
  {
    "question": "84. Which HTML element is used to define a citation?",
    "options": ["&lt;cite&gt;", "&lt;citation&gt;", "&lt;reference&gt;", "&lt;source&gt;"],
    "answer": "&lt;cite&gt;"
  },
  {
    "question": "85. What is the correct HTML for making subscript text?",
    "options": ["&lt;sub&gt;", "&lt;subscript&gt;", "&lt;small&gt;", "&lt;lower&gt;"],
    "answer": "&lt;sub&gt;"
  },
  {
    "question": "86. Which HTML element is used to define superscript text?",
    "options": ["&lt;sup&gt;", "&lt;superscript&gt;", "&lt;upper&gt;", "&lt;power&gt;"],
    "answer": "&lt;sup&gt;"
  },
  {
    "question": "87. What is the correct HTML for making deleted text?",
    "options": ["&lt;del&gt;", "&lt;delete&gt;", "&lt;removed&gt;", "&lt;strike&gt;"],
    "answer": "&lt;del&gt;"
  },
  {
    "question": "88. Which HTML element is used to define inserted text?",
    "options": ["&lt;ins&gt;", "&lt;insert&gt;", "&lt;added&gt;", "&lt;new&gt;"],
    "answer": "&lt;ins&gt;"
  },
  {
    "question": "89. What is the correct HTML for making a definition term?",
    "options": ["&lt;dt&gt;", "&lt;term&gt;", "&lt;definition&gt;", "&lt;def&gt;"],
    "answer": "&lt;dt&gt;"
  },
  {
    "question": "90. Which HTML element is used to define a definition description?",
    "options": ["&lt;dd&gt;", "&lt;desc&gt;", "&lt;definition&gt;", "&lt;description&gt;"],
    "answer": "&lt;dd&gt;"
  },
  {
    "question": "91. What is the correct HTML for making an abbreviation?",
    "options": ["&lt;abbr&gt;", "&lt;abbreviation&gt;", "&lt;short&gt;", "&lt;acronym&gt;"],
    "answer": "&lt;abbr&gt;"
  },
  {
    "question": "92. Which HTML element is used to define contact information?",
    "options": ["&lt;address&gt;", "&lt;contact&gt;", "&lt;info&gt;", "&lt;details&gt;"],
    "answer": "&lt;address&gt;"
  },
  {
    "question": "93. What is the correct HTML for making a details disclosure element?",
    "options": ["&lt;details&gt;", "&lt;disclosure&gt;", "&lt;expand&gt;", "&lt;accordion&gt;"],
    "answer": "&lt;details&gt;"
  },
  {
    "question": "94. Which HTML element is used to define a summary for details?",
    "options": ["&lt;summary&gt;", "&lt;title&gt;", "&lt;header&gt;", "&lt;caption&gt;"],
    "answer": "&lt;summary&gt;"
  },
  {
    "question": "95. What is the correct HTML for making a mark/highlight?",
    "options": ["&lt;mark&gt;", "&lt;highlight&gt;", "&lt;yellow&gt;", "&lt;marker&gt;"],
    "answer": "&lt;mark&gt;"
  },
  {
    "question": "96. Which HTML element is used to define small print?",
    "options": ["&lt;small&gt;", "&lt;tiny&gt;", "&lt;mini&gt;", "&lt;fine&gt;"],
    "answer": "&lt;small&gt;"
  },
  {
    "question": "97. What is the correct HTML for making a time element?",
    "options": ["&lt;time&gt;", "&lt;datetime&gt;", "&lt;date&gt;", "&lt;timestamp&gt;"],
    "answer": "&lt;time&gt;"
  },
  {
    "question": "98. Which HTML attribute is used to specify the datetime value?",
    "options": ["datetime", "date", "time", "value"],
    "answer": "datetime"
  },
  {
    "question": "99. What is the correct HTML for making a ruby annotation?",
    "options": ["&lt;ruby&gt;", "&lt;annotation&gt;", "&lt;phonetic&gt;", "&lt;reading&gt;"],
    "answer": "&lt;ruby&gt;"
  },
  {
    "question": "100. Which HTML element is used to define ruby text?",
    "options": ["&lt;rt&gt;", "&lt;ruby-text&gt;", "&lt;annotation&gt;", "&lt;reading&gt;"],
    "answer": "&lt;rt&gt;"
  }
];

// Retrieve the quiz data from localStorage or use the initial questions if not already stored
let quizData = JSON.parse(localStorage.getItem("quizData")) || initialQuizData;
//localStorage.clear(); // Uncomment for fresh start during testing
//localStorage.removeItem('quizData'); // Uncomment to remove quizData for testing

let currentQuestionIndex = 0;
let score = 0;

// Helper function to decode HTML entities
function decodeHtmlEntities(html) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
}

// Wait for the DOM to be fully loaded before running the quiz
document.addEventListener('DOMContentLoaded', function() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const state = JSON.parse(savedState);
        currentQuestionIndex = state.currentQuestionIndex;
        score = state.score;
        loadQuestion();
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';
    } else {
        document.getElementById('quizContent').style.display = 'none';
    }
});

// Start the quiz
function startQuiz() {
    score = 0; // Reset score when starting a new quiz
    currentQuestionIndex = 0; // Reset question index

    document.getElementById('startButton').style.display = 'none';
    document.getElementById('quizContent').style.display = 'block';

    loadQuestion();
}

// Load a question
function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const questionData = quizData[currentQuestionIndex];
        const quizContent = `
            <div class="question">${questionData.question}</div>
            <div class="answers">
                ${questionData.options.map((option, index) => `
                    <div class="answer">
                        <input type="radio" name="answer" value="${option}" id="option${index}">
                        <label for="option${index}">${option}</label>
                    </div>
                `).join('')}
            </div>
            <button class="btn" id="next-button" onclick="submitAnswer()">Next</button>
        `;
        document.getElementById('quizContent').innerHTML = quizContent;

        // Ensure the Next button is visible when the question loads
        document.getElementById('next-button').style.display = 'block';
    } else {
        showResult();
    }
}

// Submit the answer and move to the next question
function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    // Only increment score if an answer was selected AND it's correct
    if (selectedAnswer) { 
        const selectedOption = selectedAnswer.value;
        const correctAnswer = decodeHtmlEntities(quizData[currentQuestionIndex].answer); // Decode the stored answer for comparison

        // Compare the selected option (which is likely already decoded by the browser)
        // with the explicitly decoded correct answer from quizData
        if (selectedOption === correctAnswer) {
            score++; 
        }
    }

    // Save the current progress to localStorage
    const quizState = {
        currentQuestionIndex: currentQuestionIndex + 1, 
        score: score
    };
    localStorage.setItem('quizState', JSON.stringify(quizState));

    currentQuestionIndex++; 
    loadQuestion(); 
}

// Show the result
function showResult() {
    const resultContent = `
        <h2>Your Score: ${score} / ${quizData.length}</h2>
        <button class="btn" id="restart-button" onclick="restartQuiz()">Restart Quiz</button>
    `;
    document.getElementById('quizContent').innerHTML = resultContent;
}

// Restart the quiz
function restartQuiz() {
    localStorage.removeItem('quizState'); // Remove saved state from localStorage
    startQuiz(); // Call startQuiz to re-initialize and load the first question
}

// Handle form submission to add quiz data
document.getElementById('quizDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value
    ];
    const answer = document.getElementById('answer').value;

    const newQuestion = {
        question: question,
        options: options,
        answer: answer
    };

    quizData.push(newQuestion); // Add the new question to quizData

    // Save the updated quiz data to localStorage
    localStorage.setItem('quizData', JSON.stringify(quizData));

    // Clear form inputs (optional)
    document.getElementById('quizDataForm').reset();

    alert('Question added successfully!');
});