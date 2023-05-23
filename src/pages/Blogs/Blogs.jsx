import React from "react";

const Blog = () => {
  return (
    <div>
      <div className=" text-center py-2">
        <h1 className="text-5xl ">Blog</h1>
      </div>
      <div className="my-card rounded-lg">
        <div className=" p-5 rounded my-5">
          <div className="py-3">
            <h3 className="font-bold">
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?.
            </h3>
            <p>
              An access token is a short-lived token that grants access to a
              protected resource, such as an API. A refresh token is a
              long-lived token that can be used to obtain new access tokens when
              the current one expires. They work together to enable a secure and
              convenient way of accessing resources on behalf of a user. Access
              tokens and refresh tokens are issued by an authorization server
              that implements OAuth 2.0 or OpenID Connect protocols. The client
              application requests these tokens from the authorization server
              after authenticating the user and obtaining their consent. The
              client then uses the access token to make API calls to the
              resource server. When the access token expires, the client can use
              the refresh token to request a new access token without asking the
              user to log in again. The best practice for storing these tokens
              on the client-side depends on the type of client application and
              the level of security required. Generally, access tokens should be
              stored in memory and refresh tokens should be stored securely
              using encryption and other mechanisms. For example, web
              applications can store access tokens in session storage and
              refresh tokens in HTTP-only cookies. Mobile applications can store
              access tokens in memory and refresh tokens in secure storage such
              as Keychain or Keystore
            </p>
          </div>
          <div className="py-3">
            <h3 className="font-bold">2. Compare SQL and NoSQL databases?</h3>
            <p>
              SQL and NoSQL databases are two types of databases that differ in
              their structure, scalability, language, and use cases. Here are
              some of the main differences between them: Structure: SQL
              databases are relational, meaning they store data in tables with
              rows and columns that are linked by foreign keys. NoSQL databases
              are non-relational, meaning they store data in various formats
              such as documents, key-value pairs, graphs, or columns12.
              Scalability: SQL databases are vertically scalable, meaning they
              can handle more load by increasing the resources of a single
              server. NoSQL databases are horizontally scalable, meaning they
              can handle more load by adding more servers to a cluster12.
              Language: SQL databases use Structured Query Language (SQL) to
              query and manipulate data. NoSQL databases use different query
              languages or APIs depending on the type of database. Some NoSQL
              databases do not have a query language at all12. Data type: SQL
              databases are best suited for structured data that has
              well-defined relationships and schemas. NoSQL databases are best
              suited for unstructured or semi-structured data that has dynamic
              schemas and does not fit into a tabular format12. Use cases: SQL
              databases are ideal for applications that require complex queries,
              transactions, consistency, and reliability. NoSQL databases are
              ideal for applications that require flexibility, scalability,
              performance, and handling of large volumes of diverse data
            </p>
          </div>
          <div className="py-3">
            <h3 className="font-bold">
              3.Difference between nodejs and express js.
            </h3>
            <p></p>
          </div>
          <div className="py-3">
            <h3 className="font-bold">
              4. What is a custom hook, and why will you create a custom hook?
            </h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
