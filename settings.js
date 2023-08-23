name: Docker Image CI

on:
  push:
    branches: [ "3.8.5-V" ]
  pull_request:
    branches: [ "3.8.5-V" ]

jobs:

  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Build the Docker image
      run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
