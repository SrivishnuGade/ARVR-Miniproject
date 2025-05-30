import { gsap } from 'gsap';

const limit = 600;
/* 
moveCarRight animates a car model to move to the right. It does this in two steps:
1) It calls animateTurn to animate a right turn.
2) After the turn, it moves the car straight along the x-axis to the position (450, y, 60) over a duration of 3 seconds.
*/
export function moveCarRight(carModel) {
    let yPosition=carModel.position.y;

        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurn(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration: limit / 150,
                            x: limit,
                            y: yPosition,
                            z: 60,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });

}

export function moveCarRight1(carModel) {
    let yPosition=carModel.position.y;

        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurn1(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration:  limit / 150,
                            x: -limit,
                            y: yPosition,
                            z: -60,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });

}

export function moveCarRight2(carModel) {
    let yPosition=carModel.position.y;

        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurn2(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration:  limit / 150,
                            x: -60,
                            y: yPosition,
                            z: limit,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });

}

export function moveCarRight3(carModel) {
    let yPosition=carModel.position.y;

        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurn3(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration: limit / 150,
                            x: 60,
                            y: yPosition,
                            z: -limit,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });

}

function animateTurn(carModel, onComplete) {
    const radius = 60;
    const centerX = 75 + radius;  // Center of the turn circle at (135, y, 120)
    const centerZ = 120;  // Z-position of the circle's center
    const startAngle = 3*Math.PI/2;  
    const endAngle = Math.PI;  

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle;
        },
        onComplete: onComplete
    });
}

function animateTurn1(carModel, onComplete) {
    const radius = 60;
    const centerX = -75 - radius;  // Center of the turn circle at (135, y, 120)
    const centerZ = -120;  // Z-position of the circle's center
    const startAngle = 3*Math.PI/2+Math.PI;  
    const endAngle = Math.PI+Math.PI;  

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle;
        },
        onComplete: onComplete
    });
}

function animateTurn2(carModel, onComplete) {
    const radius = 60;
    const centerZ = 75 + radius;  // Center of the turn circle at (135, y, 120)
    const centerX = -120;  // Z-position of the circle's center
    const startAngle = 0;  // Start at 270 degrees
    const endAngle = -Math.PI/2;  // End at 180 degrees

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle;
        },
        onComplete: onComplete
    });
}

function animateTurn3(carModel, onComplete) {
    const radius = 60;
    const centerZ = -75 - radius;  // Center of the turn circle at (135, y, 120)
    const centerX = 120;  // Z-position of the circle's center
    const startAngle = Math.PI;  // Start at 270 degrees
    const endAngle = Math.PI/2;  // End at 180 degrees

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle;
        },
        onComplete: onComplete
    });
}

/*
This code animates a car model (carModel) to turn around a circle with a radius of 90 units. The turn starts 
at 270 degrees (pointing left) and ends at 0 degrees (pointing down), with the circle centered at (-90, y, 60). 
The animation lasts for 1 second and triggers the onComplete callback when finished.
*/
function animateTurnL1(carModel, onComplete) {
    const radius = 90;
    const centerX = 0 - radius;  // Center of the turn circle at (135, y, 120)
    const centerZ = 60;  // Z-position of the circle's center
    const startAngle = 3*Math.PI/2;  // 180 degrees (pointing left)
    const endAngle = 2*Math.PI;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

function animateTurnL11(carModel, onComplete) {
    const radius = 90;
    const centerX = 0 + radius;  // Center of the turn circle at (135, y, 120)
    const centerZ = -60;  // Z-position of the circle's center
    const startAngle = 3*Math.PI/2+Math.PI;  // 180 degrees (pointing left)
    const endAngle = 2*Math.PI+Math.PI;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

function animateTurnL12(carModel, onComplete) {
    const radius = 90;
    const centerZ = 0 - radius;  // Center of the turn circle at (135, y, 120)
    const centerX = -60;  // Z-position of the circle's center
    const startAngle = 0;  // 180 degrees (pointing left)
    const endAngle = Math.PI/2;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

function animateTurnL13(carModel, onComplete) {
    const radius = 90;
    const centerZ = 0 + radius;  // Center of the turn circle at (135, y, 120)
    const centerX = 60;  // Z-position of the circle's center
    const startAngle = Math.PI;  // 180 degrees (pointing left)
    const endAngle = Math.PI/2+Math.PI;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

/*
This code snippet exports a function called moveCarLeft1 that animates a car model to move in these steps.
1)It first gets the current y-position of the car model.
2)It creates a GSAP timeline for seamless transitions.
3)It adds a movement to the timeline. This movement consists of two steps:
4): It calls the animateTurnL1 function, which animates a left turn with a radius of 60.
5): After the turn, it moves the car straight along the x-axis to the position (-450, y, -30) over a duration of 5 seconds.
*/
export function moveCarLeft1(carModel) {
// / Get the second clone
        let yPosition=carModel.position.y;
        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.to(carModel.position, { duration: 0.25, x: 0, y: yPosition, z: 60 })
                .add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurnL1(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration: limit/90,
                            x: -limit,
                            y: yPosition,
                            z: -30,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });
}

export function moveCarLeft11(carModel) {
    // / Get the second clone
            let yPosition=carModel.position.y;
            // Create a GSAP timeline for seamless transitions
            const timeline = gsap.timeline();
    
            // Add each movement to the timeline
            timeline.to(carModel.position, { duration: 0.25, x: 0, y: yPosition, z: -60 })
                    .add(() => {
                        // Step 2: Animate the right turn with radius 60
                        animateTurnL11(carModel, () => {
                            // Step 3: Continue straight along the x-axis from (135, y, -60)
                            gsap.to(carModel.position, {
                                duration: limit/90,
                                x: limit,
                                y: yPosition,
                                z: 30,
                                onComplete: () => {
                                    // console.log('Car reached destination');
                                }
                            });
                        });
                    });
}

export function moveCarLeft12(carModel) {
        // / Get the second clone
                let yPosition=carModel.position.y;
                // Create a GSAP timeline for seamless transitions
                const timeline = gsap.timeline();
        
                // Add each movement to the timeline
                timeline.to(carModel.position, { duration: 0.25, x: -60, y: yPosition, z: 0 })
                        .add(() => {
                            // Step 2: Animate the right turn with radius 60
                            animateTurnL12(carModel, () => {
                                // Step 3: Continue straight along the x-axis from (135, y, -60)
                                gsap.to(carModel.position, {
                                    duration: limit/90,
                                    x: 30,
                                    y: yPosition,
                                    z: -limit,
                                    onComplete: () => {
                                        // console.log('Car reached destination');
                                    }
                                });
                            });
                        });
}

export function moveCarLeft13(carModel) {
            // / Get the second clone
                    let yPosition=carModel.position.y;
                    // Create a GSAP timeline for seamless transitions
                    const timeline = gsap.timeline();
            
                    // Add each movement to the timeline
                    timeline.to(carModel.position, { duration: 0.25, x: 60, y: yPosition, z: 0 })
                            .add(() => {
                                // Step 2: Animate the right turn with radius 60
                                animateTurnL13(carModel, () => {
                                    // Step 3: Continue straight along the x-axis from (135, y, -60)
                                    gsap.to(carModel.position, {
                                        duration: limit/90,
                                        x: -30,
                                        y: yPosition,
                                        z: limit,
                                        onComplete: () => {
                                            // console.log('Car reached destination');
                                        }
                                    });
                                });
                            });
}

/*
This code snippet defines a function called animateTurnL2 that animates a car model (carModel) to turn around a circle. 
The circle has a radius of 90+15 units and is centered at coordinates (15 - radius, 60). The turn starts at 3*Math.PI/2 radians (180 degrees) 
and ends at 2*Math.PI radians (-90 degrees) over a duration of 1 second. The animation updates the carModel's position and rotation on each frame to 
create the illusion of the car turning. The onComplete callback is triggered when the animation is finished
*/
function animateTurnL2(carModel, onComplete) {
    const radius = 90+15;
    const centerX = 15 - radius;  // Center of the turn circle at (135, y, 120)
    const centerZ = 60;  // Z-position of the circle's center
    const startAngle = 3*Math.PI/2;  // 180 degrees (pointing left)
    const endAngle = 2*Math.PI;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

function animateTurnL21(carModel, onComplete) {
    const radius = 90+15;
    const centerX = -15 + radius;  // Center of the turn circle at (135, y, 120)
    const centerZ = -60;  // Z-position of the circle's center
    const startAngle = 3*Math.PI/2+Math.PI;  // 180 degrees (pointing left)
    const endAngle = 2*Math.PI+Math.PI;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

function animateTurnL22(carModel, onComplete) {
    const radius = 90+15;
    const centerZ = -(radius-15);  // Center of the turn circle at (135, y, 120)
    const centerX = -60;  // Z-position of the circle's center
    const startAngle = 0;  // 180 degrees (pointing left)
    const endAngle = Math.PI/2;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

function animateTurnL23(carModel, onComplete) {
    const radius = 90+15;
    const centerZ = -15 + radius;  // Center of the turn circle at (135, y, 120)
    const centerX = 60;  // Z-position of the circle's center
    const startAngle = Math.PI;  // 180 degrees (pointing left)
    const endAngle = Math.PI/2+Math.PI;  // -90 degrees (pointing down)

    gsap.to(carModel.position, {
        duration: 1,
        onUpdate: function () {
            const angle = startAngle + (endAngle - startAngle) * (1 - this.progress());
            carModel.position.x = centerX + radius * Math.cos(angle);
            carModel.position.z = centerZ + radius * Math.sin(angle);
            carModel.rotation.y = -angle+Math.PI;
        },
        onComplete: onComplete
    });
}

/*
This code animates a 3D car model to move in three steps:
1) Move to position (15, y, 60) over 0.25 seconds.
2) Animate a left turn with a radius of 60 using the animateTurnL2 function.
3) Move straight to position (-450, y, -45) over 5 seconds, logging "Car reached destination" when complete
*/
export function moveCarLeft2(carModel) {
    let yPosition=carModel.position.y;

        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.to(carModel.position, { duration: 0.25, x: 15, y: yPosition, z: 60 })
                .add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurnL2(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration: limit/90,
                            x: -limit,
                            y: yPosition,
                            z: -45,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });
}

export function moveCarLeft21(carModel) {
    let yPosition=carModel.position.y;

        // Create a GSAP timeline for seamless transitions
        const timeline = gsap.timeline();

        // Add each movement to the timeline
        timeline.to(carModel.position, { duration: 0.25, x: -15, y: yPosition, z: -60 })
                .add(() => {
                    // Step 2: Animate the right turn with radius 60
                    animateTurnL21(carModel, () => {
                        // Step 3: Continue straight along the x-axis from (135, y, -60)
                        gsap.to(carModel.position, {
                            duration: limit/90,
                            x: limit,
                            y: yPosition,
                            z: 45,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });
}

export function moveCarLeft22(carModel) {
    let yPosition=carModel.position.y;

        const timeline = gsap.timeline();

        timeline.to(carModel.position, { duration: 0.25, x: -60, y: yPosition, z: 15 })
                .add(() => {
                    animateTurnL22(carModel, () => {
                        gsap.to(carModel.position, {
                            duration: limit/90,
                            x: 45,
                            y: yPosition,
                            z: -limit,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });
}

export function moveCarLeft23(carModel) {
    let yPosition=carModel.position.y;

        const timeline = gsap.timeline();

        timeline.to(carModel.position, { duration: 0.25, x: 60, y: yPosition, z: -15 })
                .add(() => {
                    animateTurnL23(carModel, () => {
                        gsap.to(carModel.position, {
                            duration: limit/90,
                            x: -45,
                            y: yPosition,
                            z: limit,
                            onComplete: () => {
                                // console.log('Car reached destination');
                            }
                        });
                    });
                });
}

/*
This JavaScript function, moveCarStraight, animates a 3D car model to move straight along the z-axis from its 
current position to z: -450 over 5 seconds, while keeping its x and y positions unchanged, and logs "Car reached 
destination" when complete.
*/
export function moveCarStraight(carModel) {
    let yPosition=carModel.position.y;
    gsap.to(carModel.position, {
        duration: limit/90,
        x: carModel.position.x,
        y: yPosition,
        z: -limit,
        ease:"none",
        onComplete: () => {
            // console.log('Car reached destination');
        }
    });
}

export function moveCarStraight1(carModel) {
    let yPosition=carModel.position.y;
    gsap.to(carModel.position, {
        duration: limit/90,
        x: carModel.position.x,
        y: yPosition,
        z: limit,
        ease:"none",
        onComplete: () => {
            // console.log('Car reached destination');
        }
    });
}

export function moveCarStraight2(carModel) {
    let yPosition=carModel.position.y;
    gsap.to(carModel.position, {
        duration: limit/90,
        x: limit,
        y: yPosition,
        z: carModel.position.z,
        ease:"none",
        onComplete: () => {
            // console.log('Car reached destination');
        }
    });
}

export function moveCarStraight3(carModel) {
    let yPosition=carModel.position.y;
    gsap.to(carModel.position, {
        duration: limit/90,
        x: -limit,
        y: yPosition,
        z: carModel.position.z,
        ease:"none",
        onComplete: () => {
            // console.log('Car reached destination');
        }
    });
}

/*
This JavaScript function, changeLane, animates a 3D car model to change lanes by moving it 30 units along 
the z-axis and 15 units along the x-axis (either left or right) over a duration of 0.25 seconds, using the GSAP library.
*/
export function changeLane(car,dir){
    let currentZ=car.position.z;
    let currentX=car.position.x;
    const timeline = gsap.timeline();
    currentZ -= 30;
    if(dir=='left'){currentX -= 15;}else if(dir=='right'){currentX += 15;}

    timeline.to(car.position, {
        duration: 0.25,
        x: currentX,
        y: car.position.y,
        z: currentZ
    });
}

export function changeLane1(car,dir){
    let currentZ=car.position.z;
    let currentX=car.position.x;
    const timeline = gsap.timeline();
    currentZ += 30;
    if(dir=='left'){currentX += 15;}else if(dir=='right'){currentX -= 15;}

    timeline.to(car.position, {
        duration: 0.25,
        x: currentX,
        y: car.position.y,
        z: currentZ
    });
}

export function changeLane2(car,dir){
    let currentZ=car.position.z;
    let currentX=car.position.x;
    const timeline = gsap.timeline();
    currentX += 30;
    if(dir=='left'){currentZ -= 15;}else if(dir=='right'){currentZ += 15;}

    timeline.to(car.position, {
        duration: 0.25,
        x: currentX,
        y: car.position.y,
        z: currentZ
    });
}

export function changeLane3(car,dir){
    let currentZ=car.position.z;
    let currentX=car.position.x;
    const timeline = gsap.timeline();
    currentX -= 30;
    if(dir=='left'){currentZ += 15;}else if(dir=='right'){currentZ -= 15;}

    timeline.to(car.position, {
        duration: 0.25,
        x: currentX,
        y: car.position.y,
        z: currentZ
    });
}

/*
This JavaScript function, moveCarFront, animates a 3D car model to move forward along the z-axis by 30 units 
over a duration of 0.25 seconds, using the GSAP library.
*/
export function moveCarFront(car) {
    let currentZ=car.position.z;
    const timeline = gsap.timeline();
    
    // Move car forward by 30 units on the z-axis
    currentZ -= 30;
    
    timeline.to(car.position, { 
        duration: 0.25, // Update the duration to match the interval
        x: car.position.x,          // Keep x constant
        y: car.position.y,          // Keep y constant
        z: currentZ     // Use updated z position
    });
}

export function moveCarFront1(car) {
    let currentZ=car.position.z;
    const timeline = gsap.timeline();
    
    // Move car forward by 30 units on the z-axis
    currentZ += 30;
    
    timeline.to(car.position, { 
        duration: 0.25, // Update the duration to match the interval
        x: car.position.x,          // Keep x constant
        y: car.position.y,          // Keep y constant
        z: currentZ     // Use updated z position
    });
}

export function moveCarFront2(car) {
    let currentX=car.position.x;
    const timeline = gsap.timeline();
    
    currentX += 30;
    
    timeline.to(car.position, { 
        duration: 0.25,
        x: currentX,       
        y: car.position.y,      
        z: car.position.z
    });
}

export function moveCarFront3(car) {
    let currentX=car.position.x;
    const timeline = gsap.timeline();
    
    currentX -= 30;
    
    timeline.to(car.position, { 
        duration: 0.25,
        x: currentX,       
        y: car.position.y,      
        z: car.position.z
    });
}