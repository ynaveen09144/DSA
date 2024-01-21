public class WordSearch
{
    public bool Exist(char[][] board, string word)
    {
        for (int row = 0; row < board.Length; row++)
        {
            for (int col = 0; col < board[0].Length; col++)
            {
                if (DFS(board, row, col, word, 0))
                {
                    return true;
                }
            }
        }
        return false;
    }

    private bool DFS(char[][] board, int row, int col, string word, int index)
    {
        if (row < 0 || row >= board.Length || col < 0 || col >= board[0].Length || board[row][col] != word[index])
        {
            return false;
        }

        if (index == word.Length - 1)
        {
            return true;
        }

        char originalChar = board[row][col];
        board[row][col] = '#'; // Mark as visited

        bool found = DFS(board, row + 1, col, word, index + 1) ||
                     DFS(board, row - 1, col, word, index + 1) ||
                     DFS(board, row, col + 1, word, index + 1) ||
                     DFS(board, row, col - 1, word, index + 1);

        board[row][col] = originalChar; // Backtrack

        return found;
    }
}

class Program
{
    static void Main()
    {
        char[][] board = new char[][]
        {
            new char[] {'A', 'B', 'C', 'E'},
            new char[] {'S', 'F', 'C', 'S'},
            new char[] {'A', 'D', 'E', 'E'},
        };

        string word = "ABCCED";

        WordSearch wordSearch = new WordSearch();
        bool result = wordSearch.Exist(board, word);

        Console.WriteLine(result); // Output: True
    }
}
