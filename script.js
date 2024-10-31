import { pdfModelClient } from './node_modules/test-artifacts/src/pdf/pdf-model-client.js'
import { getPDFContentForClient } from './node_modules/test-artifacts/src/pdf/models/template.js'

document.addEventListener("DOMContentLoaded", function () {
    const testPlanLink = document.getElementById("test-plan-link");

    testPlanLink.addEventListener("click", function (event) {
        event.preventDefault();
       
        let pdfContent = getPDFContentForClient('My project', 'frontend', 'chrome')
        pdfModelClient(pdfContent, 'test-plan')
    });
});