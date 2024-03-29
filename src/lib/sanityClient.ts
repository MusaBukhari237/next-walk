import { createClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn,
} from "../../sanity/env";

export const sanityClient = createClient({
  apiVersion: apiVersion,
  dataset: dataset,
  projectId: projectId,
  token: token,
  useCdn: useCdn,
});
