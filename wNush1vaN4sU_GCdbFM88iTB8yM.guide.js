pendo.guideContent('l8eoNG0MdRPNmAoaq3jYGXhwlEg','xfwvWZcgJlOeToosxhhEKfWL2co',"<style id=\"pendo-inline-css\" type=\"text/css\">#pendo-g-xfwvWZcgJlOeToosxhhEKfWL2co img {\n  padding-top: 14px;\n}\n</style><script id=\"pendo-inline-script\">\n<% if (typeof guide !== 'undefined') { %>\nvar guide = pendo.findGuideById('<%= guide.id %>');\nvar step = guide && guide.findStepById('<%= step.id %>');\n<% } %>\n/*BEGIN PENDO SCRIPT WRAPPER*/\n// Guide custom code that injects a step counter inline with the Back/Next buttons\n// Steps:\n// 1. Paste this JS in a custom code block\n// 2. Set 'currentStep' to the current step of the guide (e.g. the '5' in '5 / 7')\n// 3. Set 'totalSteps' to the total step count of the guide (e.g. the '7' in '5 / 7')\n\n/* Change these values to adjust the step counter */\nvar currentStep = 1;\nvar totalSteps = 2;\n\n/* ************\n* DO NOT CHANGE BELOW THIS LINE *\n************ */\n(function injectStepCounter (dom, _) {\n    var stepText = document.createTextNode(currentStep + ' / ' + totalSteps);\n    var stepElm = document.createElement('div');\n    setTimeout(function() { //short delay to ensure the guide has populated already\n        dom(stepElm).addClass('_pendo-ps-custom-step-counter');\n        dom(stepElm)[0].style=\"display: inline-block; position: absolute; bottom: 0px; padding: 8px 12px; border-radius: 8px; background-color: #494FEF; color: white; font-size:14px; line-height: 16px;\";\n        dom(stepElm)[0].append(stepText);\n        dom('._pendo-ps-custom-step-counter').remove();\n        \n        // looks for a button containing 'Done' or 'Next' as text\n        if (dom('._pendo-button:contains(\"Done\")').length > 0) {\n            dom('._pendo-button:contains(\"Done\")').closest('.pendo-mock-flexbox-row')[0].prepend(stepElm);\n        } else if (dom('._pendo-button:contains(\"Next\")').length > 0) {\n            dom('._pendo-button:contains(\"Next\")').closest('.pendo-mock-flexbox-row')[0].prepend(stepElm);\n        }\n    }, 300);\n})(pendo.dom, pendo._);\n/*END PENDO SCRIPT WRAPPER*/</script>",function(root) {
var __t, __p = '';
__p += '';
return __p
},function(step,guide){// Guide custom code that injects a step counter inline with the Back/Next buttons
// Steps:
// 1. Paste this JS in a custom code block
// 2. Set 'currentStep' to the current step of the guide (e.g. the '5' in '5 / 7')
// 3. Set 'totalSteps' to the total step count of the guide (e.g. the '7' in '5 / 7')

/* Change these values to adjust the step counter */
var currentStep = 1;
var totalSteps = 2;

/* ************
* DO NOT CHANGE BELOW THIS LINE *
************ */
(function injectStepCounter (dom, _) {
    var stepText = document.createTextNode(currentStep + ' / ' + totalSteps);
    var stepElm = document.createElement('div');
    setTimeout(function() { //short delay to ensure the guide has populated already
        dom(stepElm).addClass('_pendo-ps-custom-step-counter');
        dom(stepElm)[0].style="display: inline-block; position: absolute; bottom: 0px; padding: 8px 12px; border-radius: 8px; background-color: #494FEF; color: white; font-size:14px; line-height: 16px;";
        dom(stepElm)[0].append(stepText);
        dom('._pendo-ps-custom-step-counter').remove();
        
        // looks for a button containing 'Done' or 'Next' as text
        if (dom('._pendo-button:contains("Done")').length > 0) {
            dom('._pendo-button:contains("Done")').closest('.pendo-mock-flexbox-row')[0].prepend(stepElm);
        } else if (dom('._pendo-button:contains("Next")').length > 0) {
            dom('._pendo-button:contains("Next")').closest('.pendo-mock-flexbox-row')[0].prepend(stepElm);
        }
    }, 300);
})(pendo.dom, pendo._);});