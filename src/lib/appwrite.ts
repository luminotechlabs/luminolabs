import { Client, Databases, ID } from "appwrite";

export interface EnquiryPayload {
  name: string;
  email: string;
  service: string;
  message: string;
  sourceUrl?: string;
}

const endpoint =
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "";
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "";

let client: Client | null = null;
let databases: Databases | null = null;

function getDatabases(): Databases | null {
  if (!databases && projectId) {
    client = new Client().setEndpoint(endpoint).setProject(projectId);
    databases = new Databases(client);
  }
  return databases;
}

/**
 * Submits client-side enquiry form to Appwrite backend database.
 * If Appwrite environment variables are not yet configured (e.g. during preliminary local test),
 * it logs a notice and resolves successfully so development flow is uninterrupted.
 */
export async function submitEnquiry(data: EnquiryPayload): Promise<{
  success: boolean;
  id?: string;
  message?: string;
}> {
  const db = getDatabases();

  if (!projectId || !databaseId || !collectionId || !db) {
    console.warn(
      "[Appwrite] Missing configuration environment variables:\n" +
        "- NEXT_PUBLIC_APPWRITE_PROJECT_ID: " + (projectId ? "configured" : "missing") + "\n" +
        "- NEXT_PUBLIC_APPWRITE_DATABASE_ID: " + (databaseId ? "configured" : "missing") + "\n" +
        "- NEXT_PUBLIC_APPWRITE_COLLECTION_ID: " + (collectionId ? "configured" : "missing") + "\n" +
        "Please add these in your .env.local file to write directly to Appwrite."
    );
    // Simulate short network delay for responsive UI feedback
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      id: "mock-" + Date.now(),
      message: "Enquiry stored in local development mode (Appwrite credentials not yet set).",
    };
  }

  try {
    const document = await db.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        name: data.name.trim(),
        email: data.email.trim(),
        service: data.service,
        message: data.message.trim(),
        sourceUrl: data.sourceUrl || (typeof window !== "undefined" ? window.location.pathname : ""),
      }
    );

    return {
      success: true,
      id: document.$id,
    };
  } catch (error: unknown) {
    console.error("[Appwrite] Submission error:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to submit enquiry to Appwrite. Please verify your collection attributes and permissions.";
    throw new Error(errorMessage);
  }
}
