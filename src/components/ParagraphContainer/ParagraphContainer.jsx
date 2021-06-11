import React from "react";
import Typography from "../Typography";
/**
 * @description Component ParagraphContainer
 * @prop {string} headline title of Paragraph
 * @prop {string} body body of Paragraph
 * @prop {JSXElement} footer another element for footer, normaly a component
 */
const ParagraphContainer = ({ headline, body, footer }) => {
  return (
    <div className="w-auto h-auto max-w-xl p-4 border-dashed border-gray-1500 border-1">
      <div className="flex flex-col">
        <Typography as="h3" content={headline} color="text-green-100" />
        <Typography as="body1" content={body} />
        {footer}
      </div>
    </div>
  );
};

export default ParagraphContainer;
