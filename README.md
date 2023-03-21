<h1>REGISTER FORM</h1>
<h2>Basic app based on React</h2>
<h3>Tools used:</h3>
<ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>SCSS</li>
    <li>Redux</li>
    <li>React-hook-form</li>
    <li>Yup</li>
</ul>

<span>Form uses Yup for validation of inputs.</span></br>
<span>React-hook-form is used for data and errors handling.</span></br>
<span>Data is stored in Redux store and then can be posted to API.</span></br>

<h3>Folders organization:</h3>
<span>/app folder stores main App.tsx file and its styles file</span></br>
<span>/api folder stores API request methods.</span></br>
<span>/components folder stores all components, each component has its own folder /components/{ComponentName} with tsx file and styles file in it.</span></br>
<span>/redux folder stores methods for app's redux store</span></br>
<span>/types folder stores all types used in app</span></br>
<span>/validations folder stores validation schemas for Yup</span></br>

<h3>App includes</h3>
<ul>
    <li>
        CustomForm component
        <ul>
            <li>wraps all form fields together</li>
            <li>handles data and errors</li>
            <li>submits data to store</li>
        </ul>
    </li></br>
    <li>
        CustomInput component
        <ul>
            <li>registers single field to form data</li>
            <li>
                custom user actions handling
                <ul>
                    <li>blue border on input focus</li>
                    <li>green border and checkmark on correctly validated input</li>
                    <li>red border on input with invalid value</li>
                </ul>
            </li>
            <li>password input can show/hide password when user clicks button</li>
        </ul>
    </li></br>
    <li>
        CustomSelect component
        <ul>
            <li>registers chosen value to form data</li>
            <li>
                custom user actions handling
                <ul>
                    <li>blue border on dropdown opened</li>
                    <li>green border and checkmark on correctly validated value</li>
                    <li>red border when form is submitted without value</li>
                </ul>
            </li>
            <li>custom styling</li>
        </ul>
    </li></br>
    <li>
        Modal component
        <ul>
            <li>shows submitted values</li>
            <li>user can go back to form to edit values</li>
            <li>user can confirm values</li>
            <li>
                shows 404 error on confirmation (no API to post to)
                <ul>
                    <li>error screen lets user go back</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>