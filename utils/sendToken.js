export const sendToken = (res, user, message, statusCode = 200) => {
    const token = user.getJWTToken();
    const options = {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      // secure: true, // only comment on local host uncommet in live server
      
      sameSite: "none",
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      message,
      user,
    });
  };
  