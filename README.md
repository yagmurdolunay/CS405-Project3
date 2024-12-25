







# Solar System Visualization Project

## Overview
This project implements a 3D solar system visualization using WebGL. It features a hierarchical scene graph, Phong lighting model, and includes the Sun, Earth, Moon, and Mars.

## Features
- **Scene Graph Implementation**: Hierarchical representation of celestial bodies
- **Phong Lighting**: Realistic lighting with ambient, diffuse, and specular components
- **Texture Mapping**: Real astronomical textures for each planet
- **Dynamic Rotations**: Planets rotate around their axes and the Sun

## Tasks Completed

### Task 1: Scene Graph
- Implemented hierarchical transformation system
- Created parent-child relationships between celestial bodies
- Handled matrix transformations for position, rotation, and scale

### Task 2: Lighting System
Implemented Phong lighting model with:
- Ambient lighting (0.35)
- Diffuse reflection
- Specular highlights
- Normal mapping support

### Task 3: Mars Integration
Added Mars to the solar system with:
- Correct positioning (-6 units on X-axis)
- Proper scaling (0.35)
- Rotation speed (1.5x Sun's rotation)
- Accurate texture mapping

## Technical Details

### Dependencies
- WebGL
- JavaScript
- HTML5

### Key Classes
- `SceneNode`: Manages scene graph hierarchy
- `MeshDrawer`: Handles 3D mesh rendering
- `TRS`: Manages transformations (Translation, Rotation, Scale)
- `Camera`: Handles view perspective
- `Texture`: Manages texture loading and mapping

### Shaders
- Vertex Shader: Handles vertex transformations
- Fragment Shader: Implements Phong lighting model

## Setup and Running
1. Clone the repository
2. Open `project3.html` in a WebGL-compatible browser
3. The solar system visualization should start automatically

## Controls
- The scene automatically animates
- Planets rotate at their specified speeds
- Camera position is fixed for optimal viewing

## Future Improvements
- Add more planets
- Implement orbital paths
- Add interactive camera controls
- Include planet information display

## Credits
- Planet textures from NASA
- WebGL implementation based on course materials
- Scene graph implementation from scratch
