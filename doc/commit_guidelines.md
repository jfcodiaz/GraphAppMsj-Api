
# Commit Nomenclature Guide

This guide details the commit nomenclature adopted, inspired by the [Conventional Commits](https://www.conventionalcommits.org) standard. The incorporation of emojis not only simplifies and makes the process more attractive and fun but also maintains the advantages of the original convention with clear visual integration.

## Commit Format

Each commit follows this general format:

```
:emoji [#issue] modifier - description :emoji
```

### Components

- **Initial Emoji**: Represents the type of commit, making the commits visually distinctive and easily identifiable.
- **Issue Number and Modifier**: Enclosed in brackets and preceded by `#`, it links the commit to a specific issue in the issue tracker. Modifiers like `!` for significant changes or `(scope)` for specific scopes follow immediately after the issue number.
- **Description**: A brief summary of what the commit does, preceded by a dash.
- **Ornamental Final Emoji**: A decorative element related to the content of the commit.

## Types of Commit and Corresponding Emojis

The following emojis are used to represent the type of each commit, with their equivalence in Conventional Commits:

- ✨ - New features, equivalent to `feat`.
- 🐛 - Bug fixes, equivalent to `fix`.
- 📚 - Documentation, equivalent to `docs`.
- 🎨 - Style changes that do not affect the meaning of the code, equivalent to `style`.
- 🔨 - Code refactorizations, equivalent to `refactor`.
- 🚀 - Performance improvements, equivalent to `perf`.
- ✅ - Adding tests, equivalent to `test`.
- 🔧 - Configuration changes or minor tasks, equivalent to `chore`.

## Commit Examples

- ✨ [#12] ! - Implement new login feature 🚀
- 🔧 [#34] (config) - Update build script 🛠

## Reasons for Choosing Emojis

1. **Visual Improvement**: Emojis add a visual dimension that facilitates the quick understanding of the purpose of each commit.
2. **Simplification and Fun**: By integrating emojis, the process becomes not only more enjoyable but also more intuitive.
3. **Ornamental Element**: The second emoji is decorative and selected based on what has been accomplished in the commit, adding a personal and artistic touch to the records.

This commit structure, inspired by Conventional Commits, has been adapted to reflect a methodology that is both functional and visually attractive, without losing the rigor and clarity that the convention provides.
