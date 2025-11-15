@done
@infrastructure
@workspace
@pnpm
@migration
@infra
@INFRA-001
Feature: Migrate from Yarn to pnpm workspace

  """
  Use pnpm workspace protocol for internal package dependencies (workspace:*)
  Migration creates foundation for future modularity (extracting components, utilities, etc.)
  Modern Next.js (15+) works with pnpm workspaces without shamefully-hoist - see Vercel Turborepo template
  """

  # ========================================
  # EXAMPLE MAPPING CONTEXT
  # ========================================
  #
  # BUSINESS RULES:
  #   1. Must use pnpm 9.x (latest stable version)
  #   2. Workspace must have apps/ and packages/ directories
  #   3. Main Next.js app must be in apps/main-website/
  #   4. All Yarn artifacts (.yarn/, yarn.lock, .yarnrc.yml) must be removed
  #   5. All existing functionality must be preserved (dev server, build, lint)
  #   6. Migration must happen on new branch pnpm-migration from main
  #
  # EXAMPLES:
  #   1. Current: yarn dev runs Next.js dev server → After: pnpm dev (from root) runs Next.js dev server
  #   2. Current: All code in src/ → After: All code in apps/main-website/src/
  #   3. pnpm-workspace.yaml defines apps/* and packages/* as workspace members
  #   4. .npmrc contains strict-peer-dependencies=false for flexibility
  #   5. New package packages/ui/ created as placeholder for future Next.js UI components
  #   6. leads/ directory stays at root (markdown files for CRM tracking)
  #
  # QUESTIONS (ANSWERED):
  #   Q: Should the spec/ directory (fspec files) stay at root or move to apps/main-website/?
  #   A: true
  #
  #   Q: Should CLAUDE.md, README.md, and documentation stay at root or move to apps/main-website/?
  #   A: true
  #
  #   Q: What should go into packages/shared/? Are there existing utilities to extract?
  #   A: true
  #
  #   Q: Should packages/leads/ be a full package or just keep leads/ directory at root?
  #   A: true
  #
  # ========================================

  Background: User Story
    As a developer managing riflebird-agency monorepo
    I want to migrate from Yarn to pnpm with workspace structure
    So that I can manage multiple packages efficiently and prepare for future modularity

  Scenario: Create workspace structure with apps and packages directories
    Given the project uses Yarn 4.5.3 with single package structure
    When I create the pnpm workspace structure
    Then the apps/ directory should exist at root
    And the packages/ directory should exist at root
    And apps/main-website/ should be created
    And packages/ui/ should be created as a placeholder

  Scenario: Move Next.js application to apps/main-website
    Given the current Next.js app code is in src/, public/, and root config files
    When I move the application to apps/main-website/
    Then all src/ contents should be in apps/main-website/src/
    And all public/ contents should be in apps/main-website/public/
    And package.json should be in apps/main-website/
    And Next.js config files should be in apps/main-website/
    And TypeScript config should be in apps/main-website/

  Scenario: Configure pnpm workspace
    Given the workspace structure is created
    When I create pnpm-workspace.yaml at root
    Then it should define 'apps/*' as workspace members
    And it should define 'packages/*' as workspace members
    And pnpm should recognize all workspace packages

  Scenario: Remove Yarn artifacts
    Given the project has Yarn 4.5.3 artifacts
    When I remove Yarn configuration and cache
    Then .yarn/ directory should be deleted
    And yarn.lock should be deleted
    And .yarnrc.yml should be deleted
    And .gitignore should not reference Yarn-specific paths

  Scenario: Configure pnpm settings
    Given pnpm workspace is configured
    When I create .npmrc at root
    Then it should contain strict-peer-dependencies=false
    And pnpm should use version 9.x
    And packageManager field should specify pnpm@9.x.x

  Scenario: Preserve development server functionality
    Given the migration is complete
    When I run pnpm dev from root
    Then the Next.js development server should start
    And it should run on http://localhost:3000
    And all routes should work correctly
    And hot reload should function properly

  Scenario: Preserve build functionality
    Given the migration is complete
    When I run pnpm build from root
    Then the Next.js production build should complete successfully
    And all pages should be optimized
    And no build errors should occur

  Scenario: Preserve linting functionality
    Given the migration is complete
    When I run pnpm lint from root
    Then ESLint should check all source files
    And linting should complete without errors

  Scenario: Keep monorepo-wide files at root
    Given the workspace structure is created
    When I organize project files
    Then spec/ directory should remain at root
    And CLAUDE.md should remain at root
    And README.md should remain at root
    And leads/ directory should remain at root
    And .gitignore should remain at root

  Scenario: Create placeholder UI package
    Given packages/ directory exists
    When I create packages/ui/
    Then it should have a package.json
    And package.json should have name "@riflebird/ui"
    And it should have src/ directory structure
    And it should be ready for Next.js-specific components

  Scenario: Migrate on correct branch
    Given I am on main branch
    When I create the pnpm-migration branch
    Then the branch should be created from main
    And fspec branch should remain separate
    And I should be on pnpm-migration branch
