export function disableFormFields(form) {
  for (const element of form.elements) {
    element.disabled = true;
  }
}