module managers {
    export class Collision {
        public static Check(obj1: objects.GameObject, obj2: objects.GameObject): boolean {
            // Create 2 temporary Vec2 objects used for collision detections
            let p1: math.Vec2 = new math.Vec2(obj1.x, obj1.y);
            let p2: math.Vec2 = new math.Vec2(obj2.x, obj2.y);

            if(math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
                if(!obj2.isColliding) {
                    console.log("Colliding with " + obj2.name);
                    obj2.isColliding = true;
                }
                return true;
            }
            else {
                obj2.isColliding = false;
                return false;
            }
        }
    }
} 