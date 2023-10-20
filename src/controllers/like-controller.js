const LikeService = require('../services/like-service');

const likeService = new LikeService();

const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.body.modelId,
      req.body.modelType,
      req.body.userId
    );

   
    return res.status(201).json({
      success: true,
      message: 'successfully like created',
      data: response,
      errors: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'like failed',
      data: {},
      errors: error,
    });
  }
};

module.exports = { toggleLike };
