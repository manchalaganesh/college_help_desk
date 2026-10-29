import {getRAGResponse} from "../services/rag.service.js"; 
export const sendMessage = async (req, res, next) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== "string" || !message.trim()) {
            res.status(400).json({
                success: false,
                message: "Message is required and must be a non-empty string.",
            });
            return;
        }
        const ragResponse = await getRAGResponse(message);
        res.json({
            success: true,
            data: { message: ragResponse },
        });
    } catch (error) {
        next(error);
    }
};
