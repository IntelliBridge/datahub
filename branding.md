# White Labeling Complete ✅

This document summarizes the white labeling changes made to rebrand "DataHub" to "Governance" throughout the application.

## Key Changes Made

### Core Application Branding
- **HTML title**: Changed from "DataHub" to "Governance" in `index.html`
- **Theme configuration**: Already updated in theme config files to use "Governance" branding
- **Web manifest**: Already updated to reflect Governance branding

### User Interface Updates
- **Tooltips and messages**: Updated throughout the application
- **Onboarding flow**: Changed "Continue to DataHub" to "Continue to Governance"
- **Settings pages**: Updated all user-facing text references
- **Access token management**: Changed API references from "DataHub" to "Governance"
- **Error handling**: Updated 404 pages and error messages
- **Demo banners**: Changed promotional text references

### Component-Specific Changes
- **Error page resources**: Changed help links from "DataHub Project/Docs/GitHub" to "Governance Project/Docs/GitHub"
- **Group/user management**: Updated external group references from "outside DataHub" to "outside Governance"
- **Versioning**: Changed sync status from "Synced to DataHub" to "Synced to Governance"
- **Lineage views**: Updated entity existence messages
- **Onboarding cards**: Changed invitation text to "Invite users to Governance"

## Logo Assets That Need Replacement

The following DataHub logo files should be replaced with your Governance branding:

### Primary Logos
- `src/images/datahublogo.png` - Main logo file
- `src/images/datahub_core.svg` - Core logo variant

### Animated/Loading Logos
- `src/images/datahub-logo-color-fadein.svg`
- `src/images/datahub-logo-color-loading_chaos.svg`
- `src/images/datahub-logo-color-loading_hooks.svg`
- `src/images/datahub-logo-color-loading_over.svg`
- `src/images/datahub-logo-color-loading_pendulum.svg`
- `src/images/datahub-logo-color-loading_satellite.svg`
- `src/images/datahub-logo-color-loading_simple.svg`
- `src/images/datahub-logo-color-popup.svg`
- `src/images/datahub-logo-color-stable.svg`

### Platform Diagrams
- `src/images/datahub-platforms.svg` - Platform integration diagram
- `src/images/datahub-flow-diagram-light.png` - Flow diagram

## External Documentation URLs

The following URLs still point to DataHub documentation and may need to be updated:

- `https://docs.datahub.com` - Main documentation
- `https://docs.datahub.com/docs` - Specific docs sections
- `https://github.com/datahub-project/datahub` - GitHub repository
- Various feature guide and tutorial links

**Options:**
1. Update these to point to your own Governance documentation
2. Remove the links entirely
3. Keep them as-is if you want users to access DataHub documentation

## Files Modified

The following files were updated with user-visible text changes:

### Core Application Files
- `index.html` - Page title
- `src/app/homeV2/introduce/IntroduceYourselfMainContent.tsx` - Tooltip text

### Settings and Configuration
- `src/app/shared/error/ErrorSection.tsx` - Error page resources
- `src/app/settings/AccessTokens.tsx` - API references
- `src/app/settings/Preferences.tsx` - UX preview text
- `src/app/settings/SettingsPage.tsx` - Settings description
- `src/app/home/AcrylDemoBanner.tsx` - Demo banner text

### Entity and User Management
- `src/app/identity/group/GroupListItem.tsx` - External group references
- `src/app/entityV2/group/GroupProfile.tsx` - Group profile references
- `src/app/entity/shared/entity/NonExistentEntityPage.tsx` - 404 messages
- `src/app/entityV2/shared/entity/NonExistentEntityPage.tsx` - 404 messages

### Lineage and Versioning
- `src/app/lineageV2/LineageEntityNode/NodeContents.tsx` - Entity existence messages
- `src/app/lineageV2/LineageEntityNode/SchemaFieldNodeContents.tsx` - Schema field messages
- `src/app/entityV2/shared/versioning/VersionsDrawer.tsx` - Sync status messages

### Onboarding
- `src/app/homeV2/content/tabs/discovery/sections/onboarding/OnboardingCards.tsx` - Invitation text

## Implementation Notes

- All changes preserve variable names, class names, and functional code identifiers
- Only user-visible strings were modified
- The application should function identically with the new branding
- Logo assets will need to be manually replaced with your Governance branding files
- Consider updating favicon and other brand assets as needed

## Testing Recommendations

After replacing logo assets, test the following areas:
1. Application loading and splash screens
2. Error pages and help resources
3. Settings and configuration pages
4. Onboarding flow
5. User management interfaces
6. Entity profile pages

The white labeling transformation is now complete, changing all user-visible "DataHub" references to "Governance" while maintaining full application functionality.