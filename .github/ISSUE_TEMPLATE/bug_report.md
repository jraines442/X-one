name: Bug Report
description: File a bug report to help us improve X-one
title: "[Bug]: "
labels: ["bug"]
assignees:
  - 
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: textarea
    id: description
    attributes:
      label: Description
      description: A clear and concise description of what the bug is.
      placeholder: Tell us what went wrong!
    validations:
      required: true
  - type: textarea
    id: reproduction
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior.
      placeholder: |
        1. Run `x-one create ...`
        2. Execute `npm run dev`
        3. See error
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What should happen instead?
      placeholder: Describe the expected behavior
    validations:
      required: true
  - type: textarea
    id: environment
    attributes:
      label: Environment
      description: |
        examples:
          - **OS**: macOS Big Sur
          - **Node**: 18.0.0
          - **npm**: 8.0.0
          - **X-one**: 0.1.0
      value: |
        - **OS**: 
        - **Node**: 
        - **npm**: 
        - **X-one**: 
      render: markdown
    validations:
      required: true
  - type: textarea
    id: logs
    attributes:
      label: Logs
      description: Please copy and paste any relevant error logs or output.
      render: shell
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our Code of Conduct
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
