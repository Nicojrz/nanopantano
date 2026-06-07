# NANOPANTANO

### setup
```mermaid
graph LR
    A[Write Code] --> B(Push to GitHub)
    B --> C{Tests Pass?}
    C -->|Yes| D[Deploy]
    C -->|No| E[Fix Bug]