#!/usr/bin/env python3

import random
import yaml

prefix_plain_probability = 0.2
prefix_advanced_probability = 0.5

with open("data.yaml", "r") as fp:
    data = yaml.safe_load(fp)


def fågel() -> str:
    fåg = random.choice(data["part1"]) + random.choice(data["part2"])

    foo = random.random()

    if (foo < prefix_plain_probability):
        fåg = random.choice(data["prefix"]) + " " + fåg
    elif (foo < prefix_plain_probability+prefix_advanced_probability):
        fåg = random.choice(data["prefix1"]) + random.choice(data["prefix2"]) + " " + fåg
    return fåg

for i in range(10):
    print(fågel())