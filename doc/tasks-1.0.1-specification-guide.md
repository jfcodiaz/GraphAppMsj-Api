
# Tasks 1.0.1 - Issue/Task Specification Guide

This document defines the format and guidelines for creating and documenting issues (tasks) in the project. Following **Tasks 1.0.1** ensures uniformity, clarity, and consistency across the project.

---

## Issue/Task Documentation Format (Tasks1.0.1)

Each issue or task should adhere to the following structure:

### 1. **Task Title**
   - **Format**: `📌 [ Optimistic Estimate - Pessimistic Estimate ] [ 00:00 ] Task Title {decorative emoji}`
     - **First Emoji** (`📌`): Updated according to the task's status:
       - `📌`: Task pending
       - `🚧`: In progress
       - `✅`: Completed
     - **[ 00:00 ]**: This represents the accumulated actual work time. It begins at `00:00` and is updated upon task completion to reflect the total time.
     - **Second Emoji**: Decorative only; ideally reflects the task's objective or activity.
   - **Duplicated Title**: Duplicate the title line directly below with a `#`, replacing the first emoji with a **different ornamental emoji from the second** to enhance creativity.
   - **Example**:
     ```
     📌 [ 00:30 - 01:00 ] [ 00:00 ] Set Up Development Environment 🔧
     # 🛠️ Set Up Development Environment 🔧
     ```

### 2. **Description**
   - **Purpose**: Briefly explain the task's objective and scope.
   - **User Story**: Specify the user story that the task addresses, in the format:  
     - As a **[user type]**, I want **[feature/result]**, so that **[benefit/reason]**.
   - **Details**: Provide key information and requirements to guide task implementation.

### 3. **Steps and Estimates**
   - List the subtasks or steps required to complete the task. 
   - **Title Format**: Each subtask starts with the time estimates, followed by an emoji indicating the type of commit it will generate (per the commit convention) and a decorative emoji at the end. Each step should start with `[ ]` for tracking. This title can serve as the final commit message if the step generates one.
     - Example:
       ```markdown
       - [ ] [ 00:10 - 00:20 ] 🔧 Set Up Test Environment 🛠️  
          - Description: Install and configure necessary testing tools.
          > [**Completed in**: 00:15] (Link to commit)
       ```

### 4. **Total Estimate**
   - **Format**: `[ Optimistic - Pessimistic ]`
   - **Total Time Log**: Upon task completion, log the total time and link the corresponding pull request (PR).
   - **Example**:
     ```markdown
     ### Total Estimate:
     [ 00:30 - 01:00 ]  
     > [**Completed in: 00:45 PR#X**](Link to pull request)
     ```

### Full Example

```markdown
📌 [ 00:30 - 01:00 ] [ 00:00 ] Set Up Development Environment 🔧
# 🛠️ Set Up Development Environment 🔧

### Description

Set up the development environment for the project, including the installation of dependencies and the configuration of required environment variables.

- **User Story**: As a developer, I want to set up the development environment to easily install and test dependencies.

---

### Steps and Estimates:

- [ ] [ 00:10 - 00:20 ] 🔧 Set Up Test Environment 🛠️  
   - Install and configure necessary testing tools.  
   > [**Completed in**: 00:15] (Link to commit)

- [ ] [ 00:10 - 00:20 ] 📚 Set Up Environment Variables 📄  
   - Create the `.env` file and set required variables.  
   > [**Completed in**: 00:10] (Link to commit)

---

### Total Estimate:
[ 00:30 - 01:00 ]  
> [**Completed in: 00:45 PR#X**](Link to pull request)
---
```

Using **Tasks 1.0.1** as the project standard will facilitate uniform tracking and clear task status documentation.
