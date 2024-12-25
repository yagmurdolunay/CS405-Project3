/**
 * @class SceneNode
 * @desc A SceneNode is a node in the scene graph.
 * @property {MeshDrawer} meshDrawer - The MeshDrawer object to draw
 * @property {TRS} trs - The TRS object to transform the MeshDrawer
 * @property {SceneNode} parent - The parent node
 * @property {Array} children - The children nodes
 */

class SceneNode {
    constructor(meshDrawer, trs, parent = null) {
        this.meshDrawer = meshDrawer;
        this.trs = trs;
        this.parent = parent;
        this.children = [];

        if (parent) {
            this.parent.__addChild(this);
        }
    }

    __addChild(node) {
        this.children.push(node);
    }

    draw(mvp, modelView, normalMatrix, modelMatrix) {
        // Mevcut node'un transformasyon matrisini al
        let localMatrix = this.trs.getTransformationMatrix();
        
        // Ebeveynden gelen model matrisi ile birleştir
        let newModelMatrix = MatrixMult(modelMatrix, localMatrix);
        
        // Yeni modelView matrisini hesapla
        let newModelView = MatrixMult(modelView, localMatrix);
        
        // Yeni MVP matrisini hesapla
        let newMvp = MatrixMult(mvp, localMatrix);
        
        // Yeni normal matrisini hesapla
        let newNormalMatrix = getNormalMatrix(newModelMatrix);
        
        // Eğer bir mesh drawer varsa, çiz
        if (this.meshDrawer) {
            this.meshDrawer.draw(newMvp, newModelView, newNormalMatrix);
        }
        
        // Tüm çocuk node'lar için aynı işlemi tekrarla
        if (this.children) {
            for (let child of this.children) {
                child.draw(newMvp, newModelView, newNormalMatrix, newModelMatrix);
            }
        }
    }

    

}