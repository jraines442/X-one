name: Feature Request
description: Suggest an idea for X-one
title: "[Feature]: "
labels: ["enhancement"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for your interest in improving X-one!
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Is your feature request related to a problem?
      placeholder: Describe the use case or problem you're trying to solve
    validations:
      required: true
  - type: textarea
    id: solution
    attributes:
      label: Proposed Solution
      description: Describe the solution you'd like
      placeholder: How would you like this feature to work?
    validations:
      required: true
  - type: textarea
    id: alternatives
    attributes:
      label: Alternative Solutions
      description: Have you considered any alternative solutions or workarounds?
      placeholder: Describe alternatives you've considered
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our Code of Conduct
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
