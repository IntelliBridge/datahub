# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DataHub is an open-source data catalog and metadata management platform for the modern data stack. It's a multi-language project with Java (Spring Boot), Python, and TypeScript/React components.

## Core Commands

### Build Commands
```bash
# Full build
./gradlew build

# Backend only
./gradlew :metadata-service:war:build

# Frontend only
./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint

# Python CLI
./gradlew :metadata-ingestion:installDev
```

### Development Environment
```bash
# Start full stack with Docker
./gradlew quickstartDebug

# Frontend development server
cd datahub-web-react && yarn start

# Reload containers after changes
./gradlew debugReload
```

### Testing
```bash
# Run all tests
./gradlew test

# Frontend tests
cd datahub-web-react && yarn test

# Python tests
cd metadata-ingestion && python -m pytest

# Specific test files
./gradlew :datahub-web-react:test
```

### Linting & Formatting
```bash
# Java (Spotless)
./gradlew spotlessApply

# Frontend (ESLint/Prettier)
cd datahub-web-react && yarn lint:fix

# Python (Ruff)
cd metadata-ingestion && ruff format
```

## Architecture Overview

### Multi-Service Architecture
- **metadata-service**: Core GMS (Generalized Metadata Service) - Spring Boot backend
- **datahub-web-react**: Modern React frontend with TypeScript
- **metadata-ingestion**: Python CLI and connectors for data ingestion
- **datahub-actions**: Real-time metadata reaction framework
- **datahub-upgrade**: Database migration and upgrade service

### Key Technology Stack
- **Backend**: Java 17, Spring Boot 3.x, Kafka, Elasticsearch/OpenSearch
- **Frontend**: React 17, TypeScript, Vite, GraphQL, Ant Design
- **Python**: Python 3.10+, Pydantic, SQLAlchemy
- **Build**: Gradle (primary), Yarn (frontend)

### Event-Driven Design
DataHub uses an event-driven architecture with:
- **MCP (Metadata Change Proposal)**: Write operations
- **MCL (Metadata Change Log)**: Audit trail
- **MAE (Metadata Audit Event)**: Legacy event format

## Development Patterns

### Code Generation
- **GraphQL**: Uses codegen for type-safe GraphQL integration
- **Avro/PDL**: Metadata models generate Java/Python code
- **OpenAPI**: REST API specifications auto-generate client code

### Module Organization
- **metadata-models**: Avro/PDL schema definitions
- **entity-registry**: Entity type definitions and configurations
- **metadata-events**: Event schemas (MXE/MCP/MCL)
- **datahub-graphql-core**: GraphQL schema and resolvers

### Plugin Architecture
- Configurable authentication providers
- Custom authorization policies
- Ingestion source plugins (100+ connectors)
- UI extensions and customizations

## Important File Locations

### Configuration
- `build.gradle`: Main build configuration
- `datahub-web-react/package.json`: Frontend dependencies
- `metadata-ingestion/setup.py`: Python package configuration
- `docker/docker-compose.yml`: Development environment

### Core Code
- `metadata-service/war/src/main/resources/`: Backend configuration
- `datahub-web-react/src/`: Frontend source code
- `metadata-ingestion/src/datahub/`: Python CLI and ingestion
- `metadata-models/src/main/`: Metadata model definitions

### Development Tools
- `docker/`: Docker configurations and scripts
- `smoke-test/`: End-to-end testing
- `docs/`: Documentation and guides

## Docker Development

### Quick Start
```bash
# Start development environment
./gradlew quickstartDebug

# View logs
docker-compose logs -f datahub-gms
```

### Container Management
```bash
# Stop all services
./docker/nuke.sh

# Rebuild specific service
./gradlew :docker:datahub-gms:docker
```

## Common Development Workflows

### Adding New Metadata Models
1. Define Avro/PDL schema in `metadata-models/`
2. Register entity in `entity-registry/`
3. Generate code: `./gradlew :metadata-models:build`
4. Update GraphQL schema in `datahub-graphql-core/`

### Frontend Development
1. Start backend: `./gradlew quickstartDebug`
2. Start frontend: `cd datahub-web-react && yarn start`
3. GraphQL changes require: `cd datahub-web-react && yarn codegen`

### Python Connector Development
1. Create connector in `metadata-ingestion/src/datahub/ingestion/source/`
2. Add tests in `metadata-ingestion/tests/`
3. Update documentation in `docs/`

## Requirements

### System Requirements
- Java 17 JDK
- Python 3.10+
- Node.js 22.x
- Docker with 8GB+ memory
- Yarn 1.22+

### IDE Configuration
- IntelliJ IDEA recommended
- Use LinkedIn code style (`gradle/idea/LinkedIn Style.xml`)
- Enable Gradle integration