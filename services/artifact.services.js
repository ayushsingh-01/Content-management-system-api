import Artifact from "../models/artifact.model.js";

export const createArtifactService = async ({
    title,
    description,
    author,
    content,
    tags
})


export const createArtifact = async (req, res) => {
    try {
        const artifact = await createArtifactService({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            content: req.body.content,
            tags: req.body.tags
        });
        res.status(201).json({
            success: true,
            message: "Artifact created successfully",
            artifact
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}