type FileMapping = {
  path: string;
  contentType: string;
  inline?: boolean; // true = display in browser, false = download
};

export const FILE_MAPPINGS: Record<string, FileMapping> = {
  resume: {
    path: "CedricAmayaResume.pdf",
    contentType: "application/pdf",
    inline: true,
  },
};
