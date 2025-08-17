import React from "react";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProductReview = () => {
  return (
    <>
      <div className="reviewForm bg-[#9ec49e] !p-5 rounded-md w-[50%] !space-y-2">
        <h2 className="text-[18px]">Add a Review</h2>
        <form action="" className="w-full !mt-5">
          <TextField
            id="outlined-multiline-static"
            label="Leave a Review"
            multiline
            rows={5}
            variant="filled"
            className="w-full"
          />
          <Rating
            name="half-rating"
            defaultValue={0}
            precision={0.5}
            className="!mt-2"
          />
          <div className="reviewBtn flex items-center !mt-5">
            <Button className="form-btn">Submit Review</Button>
          </div>
        </form>
      </div>
      <div className="reviewContainer !space-y-2 w-[50%] border-2 border-[#9ec49e] !p-5 rounded-md">
        <h2 className="text-[18px]">Customer Reviews</h2>
        <div className="reviewScroll w-full max-h-[250px] overflow-y-scroll overflow-x-hidden !mt-4 !pr-5 ">
          <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
            <div className="info w-full flex items-center !gap-3">
              <div className="img w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  src="https://tummybox.in/wp-content/uploads/2025/01/testimonial-face-4.jpg"
                  alt="testimonial"
                  className="w-full"
                />
              </div>
              <div className="w-[75%]">
                <h4 className="text-[16px]">David Rein</h4>
                <h5 className="text-[13px]">20-12-2025</h5>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
                <p className="text-[15px]">
                  I still have a Swiss Army watch I purchased in 2007 which
                  other than battery replacement has never let me down. I
                  purchased this one due to the recessed crystal as I kept
                  cracking the original which the crystal is flush with the face
                  in my new career. Swiss Army is a quality product if you are
                  someone that chooses to purchase items that will last you a
                  long time.
                </p>
              </div>
            </div>
          </div>
          <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
            <div className="info w-full flex items-center !gap-3">
              <div className="img w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  src="https://davidhoy.com/wp-content/uploads/2019/01/testimonial-face-referral.jpg"
                  alt="testimonial"
                  className="w-full"
                />
              </div>
              <div className="w-[80%]">
                <h4 className="text-[16px]">Angela Morgan</h4>
                <h5>20-12-2025</h5>
                <Rating value={4} precision={0.5} readOnly size="small" />
                <p className="text-[15px]">
                  Nice watch! I did not check well and brought thinking it as
                  Swiss Automatic, but it was actually Quartz. Since I brought
                  it at a discounted price, decided to keep it.
                </p>
              </div>
            </div>
          </div>
          <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
            <div className="info w-full flex items-center !gap-3">
              <div className="img w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  src="https://www.psacramento.com/content/images/2021/10/paulo-sacramento.1024x1024-1.jpg"
                  alt="testimonial"
                  className="w-full"
                />
              </div>
              <div className="w-[80%]">
                <h4 className="text-[16px]">Alex Durby</h4>
                <h5 className="text-[13px]">20-12-2025</h5>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
                <p className="text-[15px]">
                  Buy it, workmanship and swiss movement top notch.
                </p>
              </div>
            </div>
          </div>
          <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
            <div className="info w-full flex items-center !gap-3">
              <div className="img w-[50px] h-[50px] overflow-hidden rounded-full">
                <img
                  src="https://davidhoy.com/wp-content/uploads/2019/01/testimonial-average-woman.jpg"
                  alt="testimonial"
                  className="w-full"
                />
              </div>
              <div className="w-[80%]">
                <h4 className="text-[16px]">Sam Hellen</h4>
                <h5 className="text-[13px]">20-12-2025</h5>
                <Rating value={3} precision={0.5} readOnly size="small" />
                <p className="text-[15px]">Great watch would recommend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
