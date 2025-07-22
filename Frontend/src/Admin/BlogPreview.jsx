// import React from "react";
// import styles from "./Blogs.module.css";

// export default function BlogPreview({ title, content }) {
//   return (
//     <div className={styles.preview}>
//       <h3>Preview</h3>
//       <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>{title}</h4>
//       <p
//         dangerouslySetInnerHTML={{
//           __html: content,
//         }}
//       ></p>
//     </div>
//   );
// }



// import React from "react";

// const BlogPreview = ({ title, content }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
//       <h3 className="text-xl font-bold text-gray-800 mb-4">Blog Preview</h3>
//       {title || content ? (
//         <>
//           <h4 className="text-lg font-semibold text-gray-700 mb-2">{title || "No title"}</h4>
//           <div
//             className="prose max-w-none"
//             dangerouslySetInnerHTML={{
//               __html: content || "<p>No content to preview</p>",
//             }}
//           />
//         </>
//       ) : (
//         <p className="text-gray-500">Create or edit a blog to see the preview</p>
//       )}
//     </div>
//   );
// };

// export default BlogPreview;

// import React from "react";
// import { FiEye } from "react-icons/fi";

// const BlogPreview = ({ title, content, lastUpdated }) => {
//   // Sanitize content to prevent XSS (in a real app, use a proper sanitizer library)
//   const sanitizedContent = content 
//     ? content.replace(/<script.*?>.*?<\/script>/gi, '') 
//     : '<p>No content to preview</p>';

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-6">
//       {/* Preview Header */}
//       <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center">
//         <FiEye className="text-blue-500 mr-2" />
//         <h3 className="text-lg font-semibold text-gray-800">Blog Preview</h3>
//         {lastUpdated && (
//           <span className="ml-auto text-xs text-gray-500">
//             Last updated: {new Date(lastUpdated).toLocaleTimeString()}
//           </span>
//         )}
//       </div>

//       {/* Preview Content */}
//       <div className="p-6">
//         {title || content ? (
//           <>
//             <h4 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100">
//               {title || "Untitled Blog Post"}
//             </h4>
//             <div
//               className="prose max-w-none"
//               style={{
//                 maxHeight: 'calc(100vh - 250px)',
//                 overflowY: 'auto',
//                 paddingRight: '8px'
//               }}
//               dangerouslySetInnerHTML={{
//                 __html: sanitizedContent,
//               }}
//             />
//           </>
//         ) : (
//           <div className="text-center py-8">
//             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
//               <FiEye className="h-5 w-5 text-gray-400" />
//             </div>
//             <h4 className="text-sm font-medium text-gray-900 mb-1">
//               No content to preview
//             </h4>
//             <p className="text-sm text-gray-500">
//               Start editing to see a live preview
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Character/Word Count (if content exists) */}
//       {content && (
//         <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
//           {content.replace(/<[^>]*>/g, '').length} characters •{' '}
//           {content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length} words
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPreview;





import React from "react";
import { FiEye } from "react-icons/fi";

const BlogPreview = ({ title, content, lastUpdated }) => {
  const sanitizedContent = content 
    ? content.replace(/<script.*?>.*?<\/script>/gi, '') 
    : '<p>No content to preview</p>';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-6">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center">
        <FiEye className="text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Blog Preview</h3>
        {lastUpdated && (
          <span className="ml-auto text-xs text-gray-500">
            Last updated: {new Date(lastUpdated).toLocaleTimeString()}
          </span>
        )}
      </div>

      <div className="p-6">
        {title || content ? (
          <>
            <h4 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              {title || "Untitled Blog Post"}
            </h4>
            <div
              className="prose max-w-none"
              style={{
                maxHeight: 'calc(100vh - 250px)',
                overflowY: 'auto',
                paddingRight: '8px'
              }}
              dangerouslySetInnerHTML={{
                __html: sanitizedContent,
              }}
            />
          </>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
              <FiEye className="h-5 w-5 text-gray-400" />
            </div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">
              No content to preview
            </h4>
            <p className="text-sm text-gray-500">
              Start editing to see a live preview
            </p>
          </div>
        )}
      </div>

      {content && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
          {content.replace(/<[^>]*>/g, '').length} characters •{' '}
          {content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length} words
        </div>
      )}
    </div>
  );
};

export default BlogPreview;