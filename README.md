# Subject Matter Assistant Client

This project is part of a graduation thesis for [Algebra University College](https://www.algebra.hr/visoko-uciliste/en/). It is a client application for the Subject Matter Assistant, originally forked from [chat-gpt-minimal](https://github.com/blrchen/chatgpt-minimal).

## Overview

The Subject Matter Assistant Client is designed to provide a user interface for interacting with the Subject Matter Assistant. It uses the neat and simple Next.js solution from [chat-gpt-minimal](https://github.com/blrchen/chatgpt-minimal) for presentation and testing purposes.

## Acknowledgments

Special thanks to the author of [Blair Chen blrchen](https://github.com/search?q=blrchen&type=users) for providing the base solution for the community.

## Features

- User-friendly interface for interacting with the Subject Matter Assistant.
- Docker support

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed.
- Access to the Subject Matter Assistant server.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CZmafi00/subject-matter-assistant-client

### Build and run docker image

1. Build docker image

   ```bash
   docker build -t <image-tag> --progress=plain .

2. Run docker image

   ```bash
   docker run -d -p <local-pc-port>:3000 -e SERVER_URL=<server-url> <image-tag>