#!/bin/bash

# Compile the Java code
javac temp.java

# Run the Java code and measure the performance metrics
/usr/bin/time -f "Memory Usage: %M KB\nExecution Time: %e s" java temp